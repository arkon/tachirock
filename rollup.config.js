import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/script.js',
  output: {
    dir: 'build',
    format: 'iife',
    name: 'MyModule'
  },
  plugins: [resolve(), commonjs()]
};
