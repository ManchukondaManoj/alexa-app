const fs = require('fs')

class AlexaApp{
    constructor(){

    }
}

fs.readdirSync(__dirname + "/Methods/").forEach(function(file) {
    if (file != 'index.js') {
      let filename = file.replace('.js', '')
      AlexaApp.prototype[filename] = require(__dirname + "/Methods/" + filename)
    }
  })

module.exports = AlexaApp
