// TODO(jim): The claim is that we can remove this
// and the package.json depdencies at some later time.
import { grpc } from "@improbable-eng/grpc-web";
import { WebsocketTransport } from "@textile/grpc-transport";
grpc.setDefaultTransport(WebsocketTransport());

import * as Utilities from "~/node_common/utilities";
import * as Data from "~/node_common/data";
import * as Constants from "~/node_common/constants";
import * as Serializers from "~/node_common/serializers";
import * as Social from "~/node_common/social";

const STAGING_DEAL_BUCKET = "stage-deal";

// TODO(jim): Work on better serialization when adoption starts occuring.
export const getById = async ({ id }) => {
  const user = await Data.getUserById({
    id,
  });

  if (!user) {
    return null;
  }

  if (user.error) {
    return null;
  }

  // TODO(jim): You can serialize this last because you will have all the information
  // from subscriptionsed, trusted, and pendingTrusted most likely.
  const activity = await Data.getActivityForUserId({ userId: id });
  const slates = await Data.getSlatesByUserId({ userId: id });
  const keys = await Data.getAPIKeysByUserId({ userId: id });
  const subscriptions = await Data.getSubscriptionsByUserId({ userId: id });
  const subscribers = await Data.getSubscribersByUserId({ userId: id });

  let serializedUsersMap = { [user.id]: Serializers.user(user) };
  let serializedSlatesMap = {};

  // NOTE(jim): The most expensive call first.
  const r1 = await Serializers.doSubscriptions({
    users: [],
    slates: [],
    subscriptions,
    serializedUsersMap,
    serializedSlatesMap,
  });

  const r2 = await Serializers.doSubscribers({
    users: [],
    slates: [],
    subscribers,
    serializedUsersMap: r1.serializedUsersMap,
    serializedSlatesMap: r1.serializedSlatesMap,
  });

  // NOTE(jim): If any trusted users are subscription users, this ends up being cheaper.
  const trusted = await Data.getTrustedRelationshipsByUserId({ userId: id });
  const r3 = await Serializers.doTrusted({
    users: [],
    trusted,
    serializedUsersMap: r2.serializedUsersMap,
    serializedSlatesMap: r2.serializedSlatesMap,
  });

  // NOTE(jim): This should be the cheapest call.
  const pendingTrusted = await Data.getPendingTrustedRelationshipsByUserId({
    userId: id,
  });
  const r4 = await Serializers.doPendingTrusted({
    users: [id],
    pendingTrusted,
    serializedUsersMap: r3.serializedUsersMap,
    serializedSlatesMap: r3.serializedSlatesMap,
  });

  let bytes = 0;
  user.data.library[0].children.forEach((each) => {
    bytes = each.size + bytes;
  });

  return {
    ...Serializers.user(user),
    type: "VIEWER",
    library: user.data.library,

    // TODO(jim): Move this elsewhere.
    allow_filecoin_directory_listing: user.data.allow_filecoin_directory_listing
      ? user.data.allow_filecoin_directory_listing
      : null,
    allow_automatic_data_storage: user.data.allow_automatic_data_storage
      ? user.data.allow_automatic_data_storage
      : null,
    allow_encrypted_data_storage: user.data.allow_encrypted_data_storage
      ? user.data.allow_encrypted_data_storage
      : null,

    // NOTE(jim): Remaining data.
    stats: {
      bytes,
      maximumBytes: Constants.TEXTILE_ACCOUNT_BYTE_LIMIT,
    },
    keys,
    activity,
    slates,
    subscriptions: r1.serializedSubscriptions,
    subscribers: r2.serializedSubscribers,
    trusted: r3.serializedTrusted,
    pendingTrusted: r4.serializedPendingTrusted,
  };
};

export const getTextileById = async ({ id }) => {
  const user = await Data.getUserById({
    id,
  });

  if (!user) {
    return null;
  }

  if (user.error) {
    return null;
  }

  let info = {};
  let status = {};
  let errors = [];
  let jobs = [];
  let dealJobs = [];

  const defaultData = await Utilities.getBucketAPIFromUserToken({ user });
  if (!defaultData || !defaultData.buckets || !defaultData.bucketRoot) {
    return null;
  }

  const {
    power,
    powerInfo,
    powerHealth,
  } = await Utilities.getPowergateAPIFromUserToken({ user });

  try {
    defaultData.buckets.archiveWatch(defaultData.bucketRoot.key, (job) => {
      if (!job) {
        return;
      }

      job.id = job.id ? job.id : "UNDEFINED";
      jobs.push(job);
    });
  } catch (e) {
    Social.sendTextileSlackMessage({
      file: "/node_common/managers/viewer.js",
      user,
      message: e.message,
      code: e.code,
      functionName: `buckets.archiveWatch`,
    });

    errors.push({ decorator: "JOB", message: e.message, code: e.code });
  }

  // NOTE(jim): This bucket is purely for staging data for other deals.
  const stagingData = await Utilities.getBucketAPIFromUserToken({
    user,
    bucketName: STAGING_DEAL_BUCKET,
    encrypted: false,
  });

  try {
    stagingData.buckets.archiveWatch(stagingData.bucketRoot.key, (job) => {
      if (!job) {
        return;
      }

      job.id = job.id ? job.id : "UNDEFINED";
      dealJobs.push(job);
    });
  } catch (e) {
    Social.sendTextileSlackMessage({
      file: "/node_common/managers/viewer.js",
      user,
      message: e.message,
      code: e.code,
      functionName: `buckets.archiveWatch`,
    });

    errors.push({ decorator: "JOB", message: e.message, code: e.code });
  }

  let r = null;
  try {
    r = await stagingData.buckets.list();
  } catch (e) {
    Social.sendTextileSlackMessage({
      file: "/node_common/managers/viewer.js",
      user,
      message: e.message,
      code: e.code,
      functionName: `buckets.list`,
    });
  }

  let items = null;
  const dealBucket = r.find((bucket) => bucket.name === STAGING_DEAL_BUCKET);
  try {
    const path = await stagingData.buckets.listPath(dealBucket.key, "/");
    items = path.item.items;
  } catch (e) {
    Social.sendTextileSlackMessage({
      file: "/node_common/managers/viewer.js",
      user,
      message: e.message,
      code: e.code,
      functionName: `buckets.listPath`,
    });
  }

  return {
    type: "VIEWER_FILECOIN",
    settings: {
      deals_auto_approve: user.data.settings_deals_auto_approve,
    },
    powerInfo,
    powerHealth,
    archive: {
      info,
      status,
      errors,
      jobs,
    },
    deal: items ? items.filter((f) => f.name !== ".textileseed") : [],
    dealJobs,
  };
};
