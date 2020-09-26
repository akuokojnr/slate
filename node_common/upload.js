import * as LibraryManager from "~/node_common/managers/library";
import * as Utilities from "~/node_common/utilities";
import * as Social from "~/node_common/social";

import B from "busboy";

const HIGH_WATER_MARK = 1024 * 1024 * 3;

export const formMultipart = async (req, res, { user, bucketName }) => {
  let data = null;

  const upload = () =>
    new Promise(async (resolve, reject) => {
      let form = new B({
        headers: req.headers,
        highWaterMark: HIGH_WATER_MARK,
      });

      form.on("file", async function (
        fieldname,
        stream,
        filename,
        encoding,
        mime
      ) {
        // console.log(fieldname);
        const isUnityFile = fieldname.startsWith("unity-file");

        if (isUnityFile) {
          let dirName = fieldname.split("|")[1];

          data = LibraryManager.createLocalDataIncomplete(
            {
              name: filename,
              type: mime,
            },
            `data-${dirName}`
          );

          // (NOTE: daniel) identity file type
          data.isUnityFile = true;
        } else {
          data = LibraryManager.createLocalDataIncomplete({
            name: filename,
            type: mime,
          });
        }

        const {
          buckets,
          bucketKey,
        } = await Utilities.getBucketAPIFromUserToken({
          user,
          bucketName,
        });

        if (!buckets) {
          return reject({
            decorator: "SERVER_BUCKET_INIT_FAILURE",
            error: true,
          });
        }

        let push;
        try {
          console.log("[upload] pushing to textile");
          if (isUnityFile) {
            const filePath = `${data.id}/${fieldname.split("|")[2]}`;

            push = await buckets.pushPath(bucketKey, filePath, {
              path: filePath,
              content: stream,
            });
          } else {
            push = await buckets.pushPath(bucketKey, data.id, stream);
          }

          console.log("[upload] finished pushing to textile");
        } catch (e) {
          Social.sendTextileSlackMessage({
            file: "/node_common/upload.js",
            user,
            message: e.message,
            code: e.code,
            functionName: `buckets.pushPath`,
          });

          return reject({
            decorator: "SERVER_BUCKETS_PUSH_ISSUE",
            error: true,
            message: e,
          });
        }

        // (NOTE: daniel) root path to unity game folder
        const { item } = await buckets.listPath(bucketKey, data.id);

        return resolve({
          decorator: "SERVER_BUCKET_STREAM_SUCCESS",
          data: isUnityFile ? item.path : push.path.path,
        });
      });

      form.on("error", (e) => {
        Social.sendTextileSlackMessage({
          file: "/node_common/upload.js",
          user,
          message: e.message,
          code: e.code,
          functionName: `form`,
        });

        return reject({
          decorator: "SERVER_BUCKET_STREAM_FAILURE",
          error: true,
          message: e,
        });
      });

      req.pipe(form);
    });

  const response = await upload();

  if (response && response.error) {
    return response;
  }

  const { buckets } = await Utilities.getBucketAPIFromUserToken({
    user,
    bucketName,
  });

  if (!buckets) {
    return {
      decorator: "SERVER_BUCKET_INIT_FAILURE",
      error: true,
    };
  }

  try {
    const newUpload = await buckets.listIpfsPath(response.data);
    data.size = newUpload.size;
  } catch (e) {
    Social.sendTextileSlackMessage({
      file: "/node_common/upload.js",
      user,
      message: e.message,
      code: e.code,
      functionName: `buckets.listIpfsPath`,
    });

    return {
      decorator: "SERVER_BUCKETS_VERIFY_ISSUE",
      error: true,
      message: e,
    };
  }

  return { decorator: "SERVER_UPLOAD_SUCCESS", data, ipfs: response.data };
};
