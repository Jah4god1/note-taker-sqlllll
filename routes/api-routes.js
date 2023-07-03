const express = require('express');
const router = express.Router();


router.get('/notes', (req, res) => {

res.json({ message: 'Get all notes' });
});

router.post('/notes', (req, res) => {

res.json({ message: 'Create a new note' });
});

router.get('/notes/:id', (req, res) => {
const noteId = req.params.id;
res.json({ message: `Get note with ID ${noteId}` });
});

router.put('/notes/:id', (req, res) => {
const noteId = req.params.id;

res.json({ message: `Update note with ID ${noteId}` });
});

router.delete('/notes/:id', (req, res) => {
const noteId = req.params.id;

res.json({ message: `Delete note with ID ${noteId}` });
});

module.exports = router;