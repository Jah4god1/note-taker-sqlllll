const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 5500;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'note_taker',
  insecureAuth: true,
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database note_taker.');
});

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + './index.html');
});

// Handle the POST request to create a note
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

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
