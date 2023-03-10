const express = require('express')
const Note = require('/Users/kelvin/Desktop/Notes API/models/notemodels')
const ApiFeatures = require('./../utils/apiFeatures')


exports.getAllNotes = async (req, res)=> {
    const features =  new ApiFeatures(Note.find().lean(), req.query).filter();
    const notes = await features.query
    res.status(200).json({
        status: 'success',
        results: notes.length,
        data: {
            notes: notes
        }
    });
};

exports.getNote = async (req, res)=> {
    const note = await Note.findById(req.params.id).lean()
    res.status(200).json({
        status: 'success',
        data: {
            note: note
        }
    })
}



exports.createNote = async (req, res) => {
    const newNote = await Note.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        note: newNote,
      },
    });
  };
  

exports.updateNote = async (req, res) =>{
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body).lean()
    res.status(200).json({
        status: 'success',
        data: {
            updatedNote
        }
    })
}

exports.deleteNote = async (req, res) => {
    const note = await Note.findByIdAndDelete(req.params.id, req.body)
    res.status(200).json({
        status: 'success',
        data: {
            note: null
        }
    })
}