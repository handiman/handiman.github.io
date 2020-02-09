const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  entry: {
    "index": "./src/index.js",
    "worker": "./src/worker.js"
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js"
  },
  resolve: {
    alias: {
      "../../theme.config$": path.join(__dirname, "/theme.config"),
      "../../src/semantic-ui/site": path.join(__dirname, "/src/semantic-ui/site")
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
        test: /\.less$/
      },
      {
        test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$/,
        use: [
          {
            loader: 'file-loader?name=[name].[ext]?[hash]', 
            options: {
              outputPath: 'images'
            }
          }
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'url-loader?limit=10000&mimetype=application/font-woff',
          options: {
            outputPath: 'fonts'
          }
        }]
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use:[{
          loader: 'file-loader',
          options: {
            outputPath: 'fonts'
          }
        }]
      },
      {
        test: /\.otf(\?.*)?$/,
        use: [{
          loader:'file-loader?name=/fonts/[name].[ext]&mimetype=application/font-otf',
          options: {
            outputPath: 'fonts'
          }
        }]
      }
    ]
  }
};  