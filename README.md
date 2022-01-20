# AssemblyScript compiler for AnotherCraft
AssemblyScript compiler is by default a node.js package. That's not much practical for our purposes, so this repository contains a wrapper around the compiler that allows it to be compiled into a standalone application (using pkg.).

Make sure you called
```
npm install -g pkg

```

Then simply to
```
pkg .

```

And put the output binary file into the `bin_common_XXX` folder of the AnotherCraft client.