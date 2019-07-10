const express = require('express')
const router = express.Router()

const alexApp = require('./AlexaApp.js')

router.post('/', alexApp)

module.exports=router
