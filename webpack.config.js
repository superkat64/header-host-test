const HtmlWebPackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;

let mode = 'development';
let target = 'web';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
  target = 'browserslist';
}

module.exports = {
  mode: mode,
  target: target,
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {targets: 'defaults'}]]
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                hideNothingWarning: true
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(svg|png)$/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'header_host_test',
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {},
      shared: { 
        react: { 
          singleton: true,
          eager: true, 
          requiredVersion: deps.react
        }, 
        'react-dom': { 
          singleton: true,
          eager: true,
          requiredVersion: deps['react-dom']
        },
      }
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ],
  devServer: {
    hot: true, port: 8080
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
};

