// Copied from assemblyscript/bin/asc
const tailArgs = process.argv.indexOf("--");
if (~tailArgs) {
  require("child_process").spawnSync(
    process.argv[0],
    process.argv.slice(tailArgs + 1).concat(
      process.argv.slice(1, tailArgs)
    ),
    { stdio: "inherit" }
  );
  return;
}

try { require("source-map-support").install(); } catch (e) {}

const asc = module.exports = require("./node_modules/assemblyscript/cli/asc.js");
asc.ready.then(() => process.exitCode = asc.main(process.argv.slice(2)));