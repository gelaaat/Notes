import Note from '../models/Note.js';
import User from '../models/User.js';

export const postNote = async (req, res) => {

    const { title, content, userId } = req.body;
    const user = await User.findById(userId);

    const newNote = new Note({
        title,
        content,
        date: new Date(),
        user: user._id
    });

    try{
        const savedNote = await newNote.save()    
        user.notes = user.notes.concat(savedNote);
        await user.save()
        res.status(201).send(newNote);

    }catch(e){
        res.json({
            message: 'error saving the note to the user'
        })
    }
};