import Note from "../models/Note.js";

export const getOneNote = async (req, res)=> {
    try {
        const note = Note.findById(req.params.id);
        res.send(note);
    } catch (error) {
        res.send('Note not founded');
    }

}
