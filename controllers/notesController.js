const express = require('express')
const Note = require('/Users/kelvin/Desktop/Notes API/models/notemodels')



exports.getAllNotes = (req, res)=> {
    const notes = Note.Find()
    res.status(200).json({
        status: 'success',
        data: {
            notes
        }
    })
}

exports.getNote = (req, res)=> {
    const note = Note.findById(req.param.id)
    res.status(200).json({
        status: 'success',
        data: {
            note
        }
    })
}

exports.createNote = (req, res)=>{
    const newnote = Note.create(req.body)
    res.status(200).json({
        status: 'success',
        data: {
            newnote
        }
    })

}

exports.updateNote = (req, res) =>{
    const updatedNote = Note.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({
        status: 'success',
        data: {
            updatedNote
        }
    })
}

exports.deleteNote = (req, res) => {
    const note = Note.findByIdAndDelete(req.params.id, req.body)
    res.status(200).json({
        status: 'success',
        data: {
            note: null
        }
    })
}