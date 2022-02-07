fs = require("fs");
dataModel = require("./dataModel");

const readFile = (fileName, dir = "doc") => {
  try {
    return fs.readFileSync(`${dir ? `${dir}` : "."}/${fileName}.md`, "utf8");
  } catch (e) {
    console.error(`There is no documentation file for ${fileName}`);
  }
  return "";
};

dataModel.readme = readFile("README", (dir = ""));

dataModel.nodes.forEach((node) => {
  if (node.hasOwnProperty("children")) {
    node.children.forEach((childNode) => {
      childNode.description = readFile(childNode.id);
    });
  } else {
    node.description = readFile(node.id);
  }
});

console.log(JSON.stringify(dataModel));
