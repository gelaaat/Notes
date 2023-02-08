import mongoose from "mongoose";
import User from "../models/User.js";


export const getUserNotes = async (req, res, next) =>{

    const userId = req.params.id;

    try {
        const user = await User.findById(userId).populate('notes');
        res.status(200).send(user.notes)

    } catch (error) {
        res.json({
            message: 'error getting the user notes'
        })
    }
    

}