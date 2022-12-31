const path = require('path')
module.exports = {
  entry: 'C:/Users/Majid Ali/Desktop/Office/Travel-site-project/app/assets/scripts/App.js',
      output: {
     filename: 'bundled.js',
    path: path.resolve(__dirname, 'app')
      },

      devServer: {
        static: {
          before: function(app, server){
            server._watch('./app/**/*.html')
          }
        },
        static: {
          directory: path.join(__dirname, 'app'),
        },
        hot: true,
        port: 9000,
        host: '0.0.0.0',
      },

      mode:'development', 
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-import',
                    'postcss-mixins',
                    'postcss-simple-vars',
                    'postcss-nested',
                    'autoprefixer',
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
    ],
  },
};
