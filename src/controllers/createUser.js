import User from "../models/User.js";
import bcrypt from 'bcrypt';

export const createUser = async (req, res, next) => {
    
    const { username, email, password } = req.body;
    const saltRound = 10;
    const passwordHash = await bcrypt.hash(password, saltRound);

    try {
        const user = new User({
            username,
            email,
            passwordHash
        });

        const savedUser = await user.save()

        res.status(201).send(savedUser);

    } catch (error) {
        res.json({
            message: 'error creating the user'
        })
    }

}