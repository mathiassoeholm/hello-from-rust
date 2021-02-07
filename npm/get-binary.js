// Based on: https://github.com/woubuc/sweep/blob/master/npm/getBinary.js

const { Binary } = require("binary-install");
const os = require("os");
const packageJson = require("../package.json");

function getPlatform() {
  const type = os.type();
  const arch = os.arch();

  if (type === "Windows_NT" && arch == "x64") {
    return "windows";
  }

  if (type === "Linux" && arch === "x64") {
    return "linux";
  }

  if (type === "Darwin" && arch === "x64") {
    return "macos";
  }

  throw new Error(
    `Unsupported platform: ${type} ${arch}. Please create an issue at ${packageJson.repository}`
  );
}

function getBinary() {
  const platform = getPlatform();
  const binary = Object.keys(packageJson.bin)[0];
  const url = `${packageJson.repository}/releases/download/v${packageJson.version}/${binary}-${platform}.tar.gz`;

  return new Binary(url, { name: binary });
}

module.exports = getBinary;
