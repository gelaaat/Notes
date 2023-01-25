import express from 'express';
import { getAllNotes } from './getAllNotes.js';
import { postNote } from '../controllers/postNote.js';
import { getOneNote } from './getOneNote.js';
import { deleteNote } from '../controllers/deleteNote.js';

const router = express.Router()

router.get('/getAllNotes', getAllNotes);
router.get('/getOneNote/:id', getOneNote);

router.post('/postNote', postNote);

router.delete('/deleteNote/:id', deleteNote);

export default router;