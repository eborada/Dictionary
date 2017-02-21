module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Container: 'app/components/container/Container.jsx',
      SearchForm:'app/components/searchForm/SearchForm.jsx',
      Results: 'app/components/results/Results.jsx',
      applicationStyles: 'app/app.scss'
    },
    extensions: ['', '.js', '.jsx', '.css']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
