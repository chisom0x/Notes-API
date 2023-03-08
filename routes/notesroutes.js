const express = require('express');
const router = express.Router()
const noteController = require('/Users/kelvin/Desktop/Notes API/controllers/notesController')



router
.route('/')
.get(noteController.getAllNotes)
.post(noteController.createNote)

router
.route('/:id')
.get(noteController.getNote)
.patch(noteController.updateNote)
.delete(noteController.deleteNote)







module.exports=router