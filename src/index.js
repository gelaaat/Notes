import express from 'express';
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routers/index.js'
import { db } from './db.js'
import session from 'express-session';
import cookieParser from 'cookie-parser';

db();
dotenv.config()
const app = express()

//middlewares
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())

app.use(session({
    secret: process.env.SECRET_KEY_SESSION,
    resave: false,
    saveUninitialized: false
}));

/* Intent amb passport i passport-local
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => done(null, user._id));
passport.deserializeUser((id, done) =>{
    User.findById(id)
    .then((user)=> done(null, user))
    .catch((e) => done(e))
})
*/


//Routers api
app.use('/api', router)



app.listen(process.env.PORT || 3000, () => {
    console.log('listening on port 3000');
})

