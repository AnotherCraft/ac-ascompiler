// Copied from assemblyscript/bin/asc

const asc = module.exports = require("./node_modules/assemblyscript/cli/asc.js");

let stdoutStr = ""
let stdoutStream = new require('stream').Writable({
    write: function (chunk, encoding, next) {
        stdoutStr = stdoutStr.concat(chunk.toString());
        next();
    }
});

let stderrStr = ""
let stderrStream = new require('stream').Writable({
    write: function (chunk, encoding, next) {
        stderrStr = stderrStr.concat(chunk.toString());
        next();
    }
});

let rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
rl.on('line', function (line) {
    asc.ready.then(function () {
        let p = JSON.parse(line);

        let exitCode = asc.main(p.args, {
            stdout: stdoutStream,
            stderr: stderrStream
        });

        process.stdout.write(JSON.stringify({
            exitCode: exitCode,
            stdout: stdoutStr,
            stderr: stderrStr
        }));

        stdoutStr = "";
        stderrStr = "";
    });
});
rl.on("close", function () {
    process.exit(0);
});