const path = require('path');


module.exports = {
  outputDir: path.resolve(__dirname, '../backend/public'),
  devServer: {
    proxy: {
        '/api': {
            target: 'http://localhost:5000'
        }
    }
  }
}