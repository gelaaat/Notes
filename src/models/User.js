import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    name: { type: String, require: true },
    phone: String,
    Adress: String,
});

export default model('User', userSchema)