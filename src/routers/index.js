import express from 'express';
import { getAllNotes } from '../controllers/getAllNotes.js';
import { postNote } from '../controllers/postNote.js';
import { getOneNote } from '../controllers/getOneNote.js';
import { deleteNote } from '../controllers/deleteNote.js';
import { createUser } from '../controllers/createUser.js';
import { getUserNotes } from '../controllers/getUserNotes.js';
import { setUpLogin } from '../middlewares/setUpLogin.js';
import { userExtractor } from '../middlewares/userExtractor.js';

const router = express.Router()

router.get('/getAllNotes', getAllNotes);
router.get('/getOneNote/:id', getOneNote);
router.get('/getUserNotes/:id', getUserNotes);


router.post('/postNote', userExtractor, postNote);
router.post('/createUser', createUser);
router.post('/login', setUpLogin);

router.delete('/deleteNote/:id', deleteNote);

export default router;