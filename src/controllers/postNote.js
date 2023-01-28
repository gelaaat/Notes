import Note from '../models/Note.js';

export const postNote = (req, res) => {

    const { title, content } = req.body;
    const newNote = new Note({
        title,
        content,
        date: new Date(),
    });

    newNote.save().then((note) => {
        res.send(newNote);
    }).catch(() => {
        console.log('error creant la nova nota');
    });
};