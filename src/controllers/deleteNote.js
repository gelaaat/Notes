import Note from "../models/Note.js";

export const deleteNote = (req, res, next) => {
    const { id } = req.params
    
    Note.findByIdAndDelete(id).then((note) => {
        
        res.json({message: 'Note Eliminated'});

    }).catch(err => {
        res.json({
            message: 'Bad id',
            error: err,
        })
    })
    
};

