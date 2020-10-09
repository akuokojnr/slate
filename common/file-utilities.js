import * as Actions from "~/common/actions";
import * as Store from "~/common/store";

import JSZip from "jszip";
import mime from "mime-types";

import { dispatchCustomEvent } from "~/common/custom-events";

const STAGING_DEAL_BUCKET = "stage-deal";

export const upload = async ({ file, context, bucketName }) => {
  let formData = new FormData();
  const HEIC2ANY = require("heic2any");

  // NOTE(jim): You must provide a file from an type="file" input field.
  if (!file) {
    return null;
  }

  const isFileZip =
    file.type.startsWith("application/zip") || file.type.startsWith("application/x-zip-compressed");
  // TODO(jim): Put this somewhere else to handle conversion cases.
  if (file.type.startsWith("image/heic")) {
    const converted = await HEIC2ANY({
      blob: file,
      toType: "image/png",
      quality: 1,
    }); //TODO(martina): figure out how to cancel an await if upload has been cancelled

    formData.append("data", converted);
  } else {
    formData.append("data", file);
  }

  if (Store.checkCancelled(`${file.lastModified}-${file.name}`)) {
    return;
  }

  const _privateUploadMethod = (path, file) =>
    new Promise((resolve, reject) => {
      const XHR = new XMLHttpRequest();

      window.addEventListener(`cancel-${file.lastModified}-${file.name}`, () => {
        XHR.abort();
      });

      XHR.open("post", path, true);
      XHR.onerror = (event) => {
        console.log(event);
        XHR.abort();
      };

      // NOTE(jim): UPLOADS ONLY.
      XHR.upload.addEventListener(
        "progress",
        (event) => {
          if (!context) {
            return;
          }

          if (event.lengthComputable) {
            console.log("FILE UPLOAD PROGRESS", event);
            context.setState({
              fileLoading: {
                ...context.state.fileLoading,
                [`${file.lastModified}-${file.name}`]: {
                  name: file.name,
                  loaded: event.loaded,
                  total: event.total,
                },
              },
            });
          }
        },
        false
      );

      window.removeEventListener(`cancel-${file.lastModified}-${file.name}`, () => XHR.abort());

      XHR.onloadend = (event) => {
        console.log("FILE UPLOAD END", event);
        try {
          return resolve(JSON.parse(event.target.response));
        } catch (e) {
          return resolve({
            error: "SERVER_UPLOAD_ERROR",
          });
        }
      };
      XHR.send(formData);
    });

  let json;
  // TODO(jim): Make this smarter.
  if (bucketName && bucketName === STAGING_DEAL_BUCKET) {
    json = await _privateUploadMethod(`/api/data/deal/${file.name}`, file);
  } else if (isFileZip) {
    json = await _privateUploadMethod(`/api/data/zip/${file.name}`, file);
  } else {
    json = await _privateUploadMethod(`/api/data/${file.name}`, file);
  }

  if (!json || json.error || !json.data) {
    if (context) {
      context.setState({
        fileLoading: {
          ...context.state.fileLoading,
          [`${file.lastModified}-${file.name}`]: {
            name: file.name,
            failed: true,
          },
        },
      });
    }
    dispatchCustomEvent({
      name: "create-alert",
      detail: {
        alert: { message: "Some of your files could not be uploaded" },
      },
    });

    return !json ? { error: "NO_RESPONSE" } : json;
  }

  return { file, json };
};

export const uploadToSlate = async ({ responses, slate }) => {
  let added;
  let skipped;
  if (responses && responses.length) {
    const addResponse = await Actions.addFileToSlate({
      slate,
      data: responses.map((res) => {
        return { title: res.file.name, ...res.json.data };
      }),
    });

    if (!addResponse) {
      dispatchCustomEvent({
        name: "create-alert",
        detail: {
          alert: {
            message: "We're having trouble connecting right now. Please try again later",
          },
        },
      });
      return;
    } else if (addResponse.error) {
      dispatchCustomEvent({
        name: "create-alert",
        detail: { alert: { decorator: addResponse.decorator } },
      });
      return;
    } else {
      added = addResponse.added;
      skipped = addResponse.skipped;
    }
  }
  let message = `${added || 0} file${added !== 1 ? "s" : ""} uploaded to slate. `;
  if (skipped) {
    message += `${skipped || 0} duplicate / existing file${
      added !== 1 ? "s were" : " was"
    } skipped.`;
  }
  dispatchCustomEvent({
    name: "create-alert",
    detail: {
      alert: { message, status: !added ? null : "INFO" },
    },
  });
};

// const extractZip = async (file) => {
//   let zip = new JSZip();

//   const getFileMeta = (dir) => {
//     const start = dir.lastIndexOf("/");
//     const name = dir.slice(start + 1);
//     const ext = dir.split(".").pop();

//     return { name, ext };
//   };

//   const contents = await zip.loadAsync(file);
//   const dirName = file.name.split(".zip")[0].toLowerCase();

//   const results = Promise.all(
//     Object.keys(contents.files).map(async (filename) => {
//       const isDir = contents.files[filename].dir;

//       if (!isDir) {
//         let content = await zip.file(filename).async("blob");
//         const { name, ext } = getFileMeta(filename);
//         let file = new File([content], name, { type: mime.lookup(ext) });

//         // (NOTE: daniel) unity file structure: unity-file|[name of zip folder]|[name of file in folder]
//         let item = {
//           path: `${dirName}|${filename}`,
//           data: file,
//         };

//         return item;
//       }
//     })
//   );

//   return results;
// };
