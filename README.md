# AssemblyScript compiler for AnotherCraft
AssemblyScript compiler is by default a node.js package. That's not much practical for our purposes, so this repository contains a wrapper around the compiler that allows it to be compiled into a standalone application (using pkg.).

USE NODE 18

Call
```
npm install -g pkg
npm install -g @vercel/ncc

npm install --omit=dev --omit=optional
rollup ./node_modules/assemblyscript/bin/asc.js --format es --dir dist/src
pkg dist -t win
```

And put the output binary file into the `bin_common_XXX` (for example `bin_common_win_x86_64`) folder of the AnotherCraft client (rename from `asc_XXX.exe` to just `asc.exe`).