var webpack = require('webpack');

module.exports = {
  entry: [
      'script!jquery/dist/jquery.min.js',
      'script!foundation-sites/dist/js/foundation.min.js',
      './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins:[
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Examples: 'app/components/Examples.jsx',
      GetWeather: 'app/components/GetWeather.jsx',
      About: 'app/components/About.jsx',
      Nav: 'app/components/Nav.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx',
      ErrorMessage: 'app/components/Error.jsx'
    },
    extensions:['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets:['react', 'es2015', 'stage-0']
        },
        test:/\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
