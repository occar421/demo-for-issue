const fs = require("fs");
const path = require("path");

const postcss = require("postcss");
const syntax = require("@stylelint/postcss-css-in-js");

const source = fs.readFileSync(path.resolve(__dirname, "./src/main.jsx")).toString();

console.log(source);

console.log("--------------------------------------------------------------------------------")

postcss()
  .process(source, { syntax, from: undefined })
  .then(result => {
    console.log("--------------------------------------------------------------------------------")

    console.log(result.content)
  });
