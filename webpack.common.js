const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
module.exports = {
  entry: './src/Performance.js',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        }
      }
      // {
      //   test: /\.tsx?$/,
      //   use: 'ts-loader',
      //   exclude: [/node_modules/, /tests/],
      // },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin()  
  ]
};