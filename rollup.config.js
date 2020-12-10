import typescript from 'rollup-plugin-typescript2';

const plugins = [
  typescript({
    typescript: require('typescript')
  })
];

export default {
  input: 'src/ts/main.ts',
  plugins,
  output: {
    file: 'dist/main.js',
    format: 'esm',
    sourcemap: false // TODO: Generate Source Map only in development mode
  }
};
