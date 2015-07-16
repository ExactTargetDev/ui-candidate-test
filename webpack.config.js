// using this plugin to compile .scss files to .css
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  // main entry point
  entry: './screenshot.js',

  output: {
    // main js output file for Screenshot.html
    filename: 'app.js',
  },

  module: {
    loaders: [
      // convertting .scss files to .css
      { test: /\.scss$/, loader: ExtractTextPlugin.extract("style", "css!sass") },
      { test: /\.png$/, loader: "url-loader?limit=8192" }
    ]
  },

  plugins: [
      // outputting generated .css file
      new ExtractTextPlugin("styles.css")
  ]  
};
