import mongoose from 'mongoose';
import Note from '../models/Note.js'

export const getAllNotes = (req, res) => {
    
    Note.find().then(result =>{
        res.status(200);
        res.json(result);

    }).catch(err =>{
        res.jason({
            err
        })
    });
    
};