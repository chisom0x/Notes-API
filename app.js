const express = require('express')
const app = express()
const notesroutes = require('./routes/notesroutes')

app.use(express.json())

app.use('/api/v1/notes', notesroutes)

module.exports = app;