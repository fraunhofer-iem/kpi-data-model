fs = require("fs");
dataModel = require("./dataModel");

const readDescription = (fileName) => {
  try {
    return fs.readFileSync(`doc/${fileName}.md`, "utf8");
  } catch (e) {
    console.error(`There is no documentation file for ${fileName}`);
  }
  return "";
};

dataModel.nodes.forEach((node) => {
  if (node.hasOwnProperty("children")) {
    node.children.forEach((childNode) => {
      childNode.description = readDescription(childNode.id);
    });
  } else {
    node.description = readDescription(node.id);
  }
});

console.log(JSON.stringify(dataModel));
