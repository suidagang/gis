const fs = require("fs");
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin-for-multihtml");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const config = require("../config");
// 通过页面配置文件过去页面json
function generateByConfig() {
  return JSON.parse(fs.readFileSync("./src/page.json"));
}

// 生成extraEntry
const extraEntry = generateByConfig();

let newExtraEntry = {};

// 生成HtmlWebpackPlugin
let extraHtmlWebpackPlugins = [];
for (let i in extraEntry) {
  let chunk = i;
  newExtraEntry[chunk] = extraEntry[i].path;
  extraHtmlWebpackPlugins.push(
    new HtmlWebpackPlugin({
      filename: chunk + ".html",
      template: "index.html",
      multihtmlCache: true,
      chunks: [chunk, 'vue'],
      pageTitle: extraEntry[i].title,
      favicon:'static/favicon.ico',
    })
  );
}

exports.extraEntry = newExtraEntry;
exports.extraHtmlWebpackPlugins = extraHtmlWebpackPlugins;
