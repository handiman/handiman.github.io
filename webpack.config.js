const path = require("path");

module.exports = {
    entry: {
        "index": "./src/index.js",
        "worker": "./src/worker.js"
    },
    output: {
	    path: path.resolve(__dirname, "./"),
	    filename: "[name].js"
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
        },
        { 
          test: /\.less$/,
          use: [ 
              { loader: "style-loader" },
              { loader: "css-loader",
                  options: { modules: { localIdentName: "[local][hash:base64:5]" }}
              }, 
              { loader: "less-loader" }
          ],
        }/*,
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
              }
            }
          ]
        },
        {
          test: /\.(jpe?g|gif|bmp|png)$/,
          use: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img/'
          }
        }*/
      ]
    }
};  