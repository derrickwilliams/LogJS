var join = require('path').join;
var _ = require('lodash');

var ENTRY = join(__dirname, 'lib/src/cbax_log.js');

var output = {
  path: join(__dirname, 'lib/build'),
  filename: 'cbax_log.js'
};

if (process.env.BUILD_ENV === 'production') {
  _.merge(output, {
    filename: 'cbax_log.min.js'
  });
}

module.exports = {
  entry: ENTRY,
  output: output,
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015'] } }
      // ,
      // { test: /\.css$/, loader: 'style!css' },
      // { test: /\.styl$/, loader: 'style!css!stylus-loader'}
    ]
  }
  // ,

  // externals: {
  //   jquery: 'jQuery',
  //   cb: 'CB'
  // }

};
