import Note from "../models/Note.js";

export const getOneNote = (req, res) => {

        Note.findById(req.params.id).then(note =>{
            res.json({note})
        }).catch(err =>{
            res.json({
                message: 'Bad id'
            })
        })
        

}
