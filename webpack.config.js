const path = require('path')

module.exports = {
  // Указываем путь до входной точки:
  entry: './src/main.js',
  output: {
    clean: true,
    // Путь до директории (важно использовать path.resolve):
    path: path.resolve(__dirname, 'build'),
    // Имя файла со сборкой:
    filename: 'bundle.js',
    clean: true
  },
  devtool: 'source-map',
  // Описываем, куда следует поместить результат работы:
  module: {
    rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: ['babel-loader']
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        }
    ]
  }
}
