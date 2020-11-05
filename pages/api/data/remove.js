import * as Data from "~/node_common/data";
import * as Utilities from "~/node_common/utilities";
import * as Strings from "~/common/strings";
import * as Social from "~/node_common/social";
import * as ViewerManager from "~/node_common/managers/viewer";

const DEFAULT_BUCKET_NAME = "data";

export default async (req, res) => {
  if (!req.body.data || !req.body.data.cids || !req.body.data.cids.length) {
    return res.status(500).send({ decorator: "SERVER_REMOVE_DATA_NO_CID", error: true });
  }

  const id = Utilities.getIdFromCookie(req);
  if (!id) {
    return res.status(403).send({ decorator: "SERVER_REMOVE_DATA_NOT_ALLOWED", error: true });
  }

  const user = await Data.getUserById({
    id,
  });

  const { buckets, bucketKey } = await Utilities.getBucketAPIFromUserToken({
    user,
  });

  if (!buckets) {
    return res.status(500).send({
      decorator: "SERVER_BUCKET_INIT_FAILURE",
      error: true,
    });
  }

  // TODO(jim): Put this call into a file for all Textile related calls.
  let r = null;
  try {
    r = await buckets.list();
  } catch (e) {
    Social.sendTextileSlackMessage({
      file: "/pages/api/data/remove-multiple.js",
      user,
      message: e.message,
      code: e.code,
      functionName: `buckets.list`,
    });
  }

  if (!r) {
    return res.status(500).send({ decorator: "SERVER_REMOVE_MULTIPLE_NO_TEXTILE", error: true });
  }

  let items = [];
  try {
    for (let i = 0; i < r.length; i++) {
      if (r[i].name === DEFAULT_BUCKET_NAME) {
        const next = await buckets.listIpfsPath(r[i].path);
        items = [...next.items, ...items];
      }
    }
  } catch (e) {
    Social.sendTextileSlackMessage({
      file: "/pages/api/data/remove-multiple.js",
      user,
      message: e.message,
      code: e.code,
      functionName: `buckets.listIpfsPath`,
    });
  }

  if (!items || !items.length) {
    return res.status(500).send({ decorator: "SERVER_REMOVE_MULTIPLE_NO_TEXTILE", error: true });
  }

  let entities = [];
  for (let i = 0; i < items.length; i++) {
    if (req.body.data.cids.includes(items[i].cid)) {
      entities.push(items[i]);
    }
  }

  if (!entities.length) {
    return res.status(500).send({ decorator: "SERVER_REMOVE_DATA_NO_CID", error: true });
  }

  let bucketRemoval;
  for (let entity of entities) {
    try {
      // NOTE(jim):
      // We use name instead of path because the second argument is for
      // a subpath, not the full path.
      await buckets.removePath(bucketKey, entity.name);
    } catch (e) {
      Social.sendTextileSlackMessage({
        file: "/pages/api/data/remove.js",
        user: user,
        message: e.message,
        code: e.code,
        functionName: `buckets.removePath`,
      });

      continue;
    }
  }

  // NOTE(jim):
  // Goes through all of your slates and removes all data references.
  let refreshSlates = false;
  let slates = await Data.getSlatesByUserId({ userId: id });
  for (let i = 0; i < slates.length; i++) {
    let slate = slates[i];

    let removal = false;
    let objects = slate.data.objects.filter((o) => {
      for (let cid of req.body.data.cids) {
        if (o.url.includes(cid)) {
          removal = true;
          refreshSlates = true;
          return false;
        }
      }
      return true;
    });

    if (removal) {
      await Data.updateSlateById({
        id: slate.id,
        updated_at: new Date(),
        data: {
          ...slate.data,
          objects,
        },
      });
    }
  }

  if (refreshSlates) {
    slates = await Data.getSlatesByUserId({ userId: id });
    ViewerManager.hydratePartialSlates(slates, id);
  }

  // NOTE(martina):
  // Removes the reposted file from other people's slates
  // for (let cid of req.body.data.cids) {
  //   Data.deleteRepostsByCid({ cid, ownerId: id });
  // }

  // NOTE(jim):
  // Removes the file reference from your library
  const unsafeResponse = await Data.updateUserById({
    id: user.id,
    data: {
      ...user.data,
      library: [
        {
          ...user.data.library[0],
          children: user.data.library[0].children.filter((o) => {
            for (let cid of req.body.data.cids) {
              if (o.ipfs.includes(cid)) {
                return false;
              }
            }
            return true;
          }),
        },
      ],
    },
  });

  if (unsafeResponse) {
    ViewerManager.hydratePartialViewer(unsafeResponse);
  }

  return res.status(200).send({
    decorator: "SERVER_REMOVE_DATA",
    success: true,
    bucketItems: items.itemsList,
  });
};
