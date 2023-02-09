import Note from "../models/Note.js";

export const getOneNote = (req, res) => {
        
        Note.findById(req.params.id).then(note =>{
            res.status(200)
            res.json({note})

        }).catch(err =>{
            res.json({
                message: 'Bad id'
            })
        })
        

}
