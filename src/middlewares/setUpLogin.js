import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const setUpLogin = async (req, res, next) =>{
    const { username, password } = req.body
    
    try{
        const user = await User.findOne({username})

        console.log(user);

        if(!user){
            res.status(401).send(JSON.stringify({
                message : 'User not found primer'
            }))
        }
        const match = await bcrypt.compare(password, user.passwordHash);

            
        if(match){
            
            const setUpToken = {
                userId: user._id,
                username
            };
    
            const token = jwt.sign(setUpToken, process.env.SECRET_KEY_SESSION);
            
            req.session.token = token;
            res.send({
                username,
                token
            });
            

        }else{
            res.status(401).send(JSON.stringify({
                message : err
            }))
        }
        

        

    }catch(e){
        res.json({
            message: 'error creating token and user'
        })
    }
    
}