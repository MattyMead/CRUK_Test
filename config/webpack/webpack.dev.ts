import webpack from 'webpack';
import merge from 'webpack-merge';
import 'webpack-dev-server';

import baseConfig from './webpack.base';

const config: webpack.Configuration = merge.smart(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    port: 8080,
    hot: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(tsx|ts)?$/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              fix: true,
              emitWarning: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|woff|woff2|svg)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  plugins: []
});

export default config;