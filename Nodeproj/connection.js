const mysql = require('mysql2');

const connection = mysql.createConnection({
host: 'localhost',
port: 3306,
user: 'root',
password: '',
database: 'note_taker',
insecureAuth: true,
});

connection.connect((err) => {
if (err) throw err;
console.log('Connected to the database note_tracker.');
});

module.exports = connection;

connection.query('SELECT 1', (error, results) => {
    if (error) {
    console.error('Error executing test query:', error);
    return;
    }
    
    console.log('Connection test successful.');
    });
    