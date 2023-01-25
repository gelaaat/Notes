import Note from "../models/Note.js";

export const deleteNote = async (req, res) => {
    const { id } = req.params
    try{
        await Note.findByIdAndDelete(id);
        res.json({
            message: 'Note Eliminated'
        });
        
    }catch(err){
        res.json({
            message: 'Bad id',
            error: err,
        });
    };
};