const express = require('express');
const mysql = require('mysql2');
const connection = require('./connection');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route for serving the index.html file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    });
    
    app.post('/notes', (req, res) => {
    const { title, description } = req.body;
    const sql = 'INSERT INTO notes (title, description) VALUES (?, ?)';
    connection.query(sql, [title, description], (error, results) => {
    if (error) {
    console.error('Error inserting note:', error);
    res.status(500).json({ error: 'Failed to insert note' });
    return;
    }
    res.json({ message: 'Note created successfully' });
    });
    });
    
    app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    });