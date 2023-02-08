import { Schema, model } from 'mongoose';


const userSchema = new Schema({
    username: { type: String, require: true },
    email: { type: String, require: true },
    passwordHash: { type: String, require: true }, 
    notes : [{
        type: Schema.ObjectId,
        ref: 'Note'
    }]
},{ 
    versionKey: false 
});

export default model('User', userSchema)