import { Schema, model } from 'mongoose';

const noteSchema = new Schema({
    title: { type: String, require: true },
    content: { type: String, require: true },
    date: Date,
    user: [{
        type: Schema.ObjectId,
        ref: 'User'
    }]
}, { 
    versionKey: false 
});

export default model('Note', noteSchema)