import JSZip from "jszip";
import mime from "mime-types";

let zip = new JSZip();

const getFileMeta = (dir) => {
  const start = dir.lastIndexOf("/");
  const name = dir.slice(start + 1);
  const ext = dir.split(".").pop();

  return { name, ext };
};

const extractZip = async (file) => {
  const contents = await zip.loadAsync(file);
  const dirName = file.name.split(".zip")[0].toLowerCase();

  const results = Promise.all(
    Object.keys(contents.files).map(async (filename) => {
      const isDir = contents.files[filename].dir;

      if (!isDir) {
        let content = await zip.file(filename).async("blob");
        const { name, ext } = getFileMeta(filename);
        let file = new File([content], name, { type: mime.lookup(ext) });

        // (NOTE: daniel) unity file structure: unity-file|[name of zip folder]|[name of file in folder]
        let item = {
          path: `unity-file|${dirName}|${filename}`,
          data: file,
        };

        return item;
      }
    })
  );

  return results;
};

export default extractZip;
