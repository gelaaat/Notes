import jwt from 'jsonwebtoken';

export const userExtractor = (req, res, next) => {
    const authorization = req.get('Authorization');
    
    let token = '';

    if(authorization && authorization.toLowerCase().startsWith('bearer')){
        token = authorization.substring(7);
    }else{
        token = req.session.token;
    }

    const decodedToken = jwt.verify(token, process.env.SECRET_KEY_SESSION);

    if(!token && !decodedToken._id){
        res.status(401).json({
            message: 'Invalid token or authorization user'
        })
    }else{
        next()
    }

}