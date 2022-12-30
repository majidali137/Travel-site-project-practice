const path = require('path')
module.exports = {
  entry: 'C:/Users/Majid Ali/Desktop/Office/Travel-site-project/app/assets/scripts/App.js',
      output: {
     filename: 'bundled.js',
    path: path.resolve(__dirname, 'app')
      },
      mode:'development',
         watch:true, 
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
