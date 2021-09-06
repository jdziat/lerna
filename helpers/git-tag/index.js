"use strict";

const execa = require("execa");

module.exports.gitTag = gitTag;

function gitTag(cwd, tagName) {
  return execa.sync("git", ["tag", tagName, "-m", tagName], { cwd });
}
