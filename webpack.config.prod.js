const path = require('path');
// const webpack = require('webpack');

module.exports = {
  bail: true,
  devtool: 'source-map',
  mode: 'production',
  entry: [
    path.resolve(__dirname, 'src/index.js'),
  ],
  output: {
    // The build folder.
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
    publicPath: '/',
    libraryTarget: 'commonjs',
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        include: path.resolve(__dirname, 'src'),
        enforce: 'pre',
      },
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file-loader',
        query: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  externals: {
    lodash: {
      root: '_',
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
    },
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
    },
    'styled-components': {
      root: 'styled-components',
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'styled-components',
    },
  },
  // plugins: [
  //   new webpack.DefinePlugin(process.env.NODE_ENV),
  // ],
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};
