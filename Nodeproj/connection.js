const express = require('express');
const mysql = require('mysql2');

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

module.exports = connection;

// Serve the index.html file

// Start the server

