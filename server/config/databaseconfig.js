import mysql from 'mysql';
import 'dotenv/config'; 

const createDatabase = () => {

  const conn = mysql.createConnection({
    host     : process.env.MYSQL_HOST,
    port     : process.env.MYSQL_LOCAL_PORT,
    user     : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
  });



  conn.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);      
    }
    console.log('connected as id ' + conn.threadId);
  });
  

  
  conn.connect(function(err) {
    if (err) throw err;
    console.log('Connected to mysql server!');
    conn.query(`CREATE DATABASE ${process.env.DATABASE}`, function (err, result) {
      if (err) throw err;
      console.log('Database created');
      console.log(result);
    });
  });

};


export default createDatabase;