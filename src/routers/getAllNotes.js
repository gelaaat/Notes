import mongoose from 'mongoose';
import Note from '../models/Note.js'

export const getAllNotes = async (req, res) => {
    try{
        Note.find().then(result =>{
            console.log(result);
        });
    }
    catch(err){
        res.send(err);
    }
    

};