import mongoose from 'mongoose';
import Note from '../models/Note.js'

export const getAllNotes = async (req, res) => {
    try{
        Note.find().then(result =>{
            res.json(result)
        });
    }
    catch(err){
        res.send(err);
    }
    

};