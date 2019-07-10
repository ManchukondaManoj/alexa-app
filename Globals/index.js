const fs = require('fs')
const normalizedPath = require('path').join(__dirname)


fs.readdirSync(normalizedPath).forEach(function(file) {
  if (fs.lstatSync(normalizedPath + '/' + file).isDirectory()) {
    console.log(file)
    require(normalizedPath + '/' + file)
  }
})
