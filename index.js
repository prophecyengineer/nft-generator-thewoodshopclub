
const path = require("path");
const isLocal = typeof process.pkg === "undefined";
// const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
// const { startCreating, buildSetup } = require(path.join(
//   basePath,
//   "/src/main.js"
// ));


const basePath = process.cwd();
const { startCreating, buildSetup } = require(`${basePath}/src/main.js`);

(() => {
  buildSetup();
  startCreating();
})();
