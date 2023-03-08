const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
    },
    note: {
        type: String,
        require: true,
        trim: true,
    },
})

const Note = mongoose.model('Note', notesSchema)
module.exports = Note