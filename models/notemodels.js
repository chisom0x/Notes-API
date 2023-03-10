const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
    },
    category: {
        type: String,
        trim: true,
        default: 'general',
        enum: {
            values: ['general', 'school', 'family', 'religion', 'health'],
            message: 'category is either; General, school, family, religion, health',
        }
    },
    note: {
        type: String,
        required: [true, 'please add a note'],
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    },
})

const Note = mongoose.model('Note', notesSchema)
module.exports = Note