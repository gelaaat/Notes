import express from 'express';
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routers/index.js'
import { db } from './db.js'

db();
dotenv.config()
const app = express()

//middlewares
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

//Routers api
app.use('/api', router)



app.listen(process.env.PORT || 3000, () => {
    console.log('listening on port 3000');
})

