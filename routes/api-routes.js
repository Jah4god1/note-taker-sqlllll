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

router.post('/notes', async (req, res) => {
    try {
        const noteData = await Note.create(req.body);
        res.status(200).json(noteData);

    } catch (err) {
      res.status(500).json(err);
    }


    // res.json({ message: 'Get all notes' });
});
// router.post('/notes', (req, res) => {

// res.json({ message: 'Create a new note' });
// });

// const locationData = await Location.findByPk(req.params.id)

router.get('/notes/:id', async (req, res) => {
    try {
        const noteId = req.params.id;
        const noteData = await Note.findByPk(noteId)
        res.status(200).json(noteData);

    } catch (err) {
      res.status(500).json(err);
    }


    // res.json({ message: 'Get all notes' });
});
// router.get('/notes/:id', (req, res) => {
// const noteId = req.params.id;
// res.json({ message: `Get note with ID ${noteId}` });
// });

router.put('/notes/:id', async (req, res) => {

    try {
        const noteData = await Note.update(req.body, {
          where: { id: req.params.id }
        });
        if (!noteData) {
          res.status(404).json({ message: 'No note with this id!' });
          return;
        }
        res.status(200).json(noteData);
      } catch (err) {
        res.status(500).json(err);
      }
});

router.delete('/notes/:id', async (req, res) => {
    const noteId = req.params.id;

    try {
        const noteData = await Note.destroy({
          where: { id: req.params.id }
        });
        if (!noteData) {
          res.status(404).json({ message: 'No note with this id!' });
          return;
        }
        res.status(200).json(noteData);
      } catch (err) {
        res.status(500).json(err);
      }
});

module.exports = router;