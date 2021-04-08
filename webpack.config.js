const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: {
    'use-barcode': './src/index.js',
    'use-barcode.min': './src/index.js',
  },
  output: {
    filename: '[name].js',
    library: {
      name: 'useBarcode',
      type: 'umd',
      export: 'default',
    },
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
      }),
    ],
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
  },
};
