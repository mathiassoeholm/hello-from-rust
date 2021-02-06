// Copied from: https://github.com/woubuc/sweep/blob/master/npm/scripts.js

function getBinary({ fatal }) {
  try {
    return require("./get-binary")();
  } catch (err) {
    if (fatal) throw err;
  }
}

if (process.argv.includes("uninstall")) {
  const binary = getBinary({ fatal: false });
  if (binary) binary.uninstall();
}

if (process.argv.includes("install")) {
  const binary = getBinary({ fatal: true });
  if (binary) binary.install();
}
