const path = require('path')

module.exports = {
  // Указываем путь до входной точки:
  entry: './src/main.js',
  devtool: 'source-map',
  // Описываем, куда следует поместить результат работы:
  module: {
    rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: ['babel-loader']
        },
    ]
  },
  output: {
    clean: true,
    // Путь до директории (важно использовать path.resolve):
    path: path.resolve(__dirname, 'build'),
    // Имя файла со сборкой:
    filename: 'bundle.js'
  }
}
