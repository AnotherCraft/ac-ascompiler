import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: './node_modules/assemblyscript/bin/asc.js',
  output: {
    dir: 'dist/src',
    format: 'cjs',
  },
  plugins: [
    commonjs(),
    nodeResolve(),
    babel({
      babelHelpers: 'bundled'
    }),
  ]
};