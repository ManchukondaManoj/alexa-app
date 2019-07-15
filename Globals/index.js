const fs = require('fs')
const normalizedPath = require('path').join(__dirname)


fs.readdirSync(normalizedPath).forEach(function(file) {
  if (fs.lstatSync(normalizedPath + '/' + file).isDirectory()) {
    require(normalizedPath + '/' + file)
  }
})
