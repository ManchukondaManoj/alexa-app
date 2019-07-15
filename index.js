global.appDir = __dirname
require('./Globals')
const axios = require('axios')
const express = require('express')
const app = express()
const Routes = require(`${appDir}/Routes`)

app.use(express.json())
app.use(express.urlencoded({extended: true}))

/**
  To insert dummy data uncomment the line 14 & 19.
  After inseting the data stop the server and comment the same.

  Keep the data you want in create.js of below mentioned folder

  Note: Please check you have required schemas in your db
*/
// let createdata = require(`${appDir}/Models/AlexaApp/Methods/create.js`)

app.use('/alexa', Routes)

connectedEmitter.on('connectedDbs', () => {
  app.listen(3000, (req, res) => {
    // createdata()
    console.log('App started on 3000');
  })
})

connectedEmitter.on('dbError', () => {
  console.log('Please check db creds');
})

process.on('SIGINT', () => {
  console.log("");
  console.log("Application aborted manually");
  process.exit(0)
})
