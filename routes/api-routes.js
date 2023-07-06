const router = require('express').Router();
const Note = require("../models")


router.get('/notes', async (req, res) => {
    try {
        const noteData = await Note.findAll();
        res.status(200).json(noteData);

    } catch (err) {
      res.status(500).json(err);
    }


    // res.json({ message: 'Get all notes' });
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