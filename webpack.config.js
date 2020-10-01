const path = require("path");

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: {
    "index": "./src/profile/index.tsx",
    "profile": "./src/profile/profile.tsx",
    "music": "./src/music/index.tsx",
    "cha-ching": "./src/cha-ching/index.tsx"
  },
  output: {
    path: path.resolve(__dirname, "./assets/js"),
    filename: "[name].js"
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.css$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader",
          options: {
            modules: {
              localIdentName: "[local][hash:base64:5]"
            }
          }
        }]
      }
    ]
  }
};