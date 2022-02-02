# AssemblyScript compiler for AnotherCraft
AssemblyScript compiler is by default a node.js package. That's not much practical for our purposes, so this repository contains a wrapper around the compiler that allows it to be compiled into a standalone application (using pkg.).

Call
```
npm install --production --no-optional
npm install -g pkg
pkg . -t win

```

And put the output binary file into the `bin_common_XXX` folder of the AnotherCraft client (rename from `asc_XXX.exe` to just `asc.exe`).