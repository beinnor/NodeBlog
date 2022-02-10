import mysql from 'mysql';
import 'dotenv/config';

// Database connection
const conn = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_LOCAL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});


export const getAllPosts = (req, res, next) => {
  
    conn.connect((err) => {
      if (err) throw err;
      
      conn.query('SELECT * FROM Posts;', (err, result) => {
        if (err) throw err;
        
        res.send(result);
      });
    });
};

export const getAPost = (req, res, next) => {
  
  const { id } = req.params;

  conn.connect((err) => {
    if (err) throw err;
    
    conn.query(`SELECT * FROM Posts WHERE Id=${id};`, (err, result) => {
      if (err) throw err;
      
      res.send(result);
    });
  });
};

