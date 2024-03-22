const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: '',
  database: 'daily_note', 
  port: 3306, 
});


connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');

  connection.query('SELECT * FROM user', (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
    } else {
      console.log('Query results:', results);
    }
  });
});

