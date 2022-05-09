import path from 'path';
import webpack from 'webpack';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import DotEnv from 'dotenv-webpack';

const rootDir = path.resolve();

const htmlPlugin: HtmlWebPackPlugin = new HtmlWebPackPlugin
({
  template: path.resolve(rootDir, 'src/public/index.html'),
  inject: 'body',
  favicon: path.resolve(rootDir, 'src/public/images/favicon.ico')
});

const config: webpack.Configuration = {
  entry: path.resolve(rootDir, 'src/index.tsx'),
  output: {
    publicPath: '/'
  },
  resolve: {
    modules: [
      path.resolve(rootDir, 'src/'),
      'node_modules'
    ],
    extensions: ['.ts', '.tsx', '.mjs', '.js', '.json', '.scss'],
    alias: {
      app: path.resolve(rootDir, 'src/'),
      images: path.resolve(rootDir, 'src/public/images/'),
      fonts: path.resolve(rootDir, 'src/public/fonts/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ],
            plugins: [
              '@babel/plugin-transform-runtime',
              'babel-plugin-styled-components',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-object-rest-spread'
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    htmlPlugin,
    new DotEnv()
  ]
};

export default config;