import mysql from 'mysql';
import 'dotenv/config'; 

const createDatabase = () => {

  const conn = mysql.createConnection({
    host     : process.env.HOST,
    port     : process.env.MYSQL_LOCAL_PORT,
    user     : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
  });

  console.log('*********');
  console.log(process.env.MYSQL_USER + ' ' + process.env.MYSQL_PASSWORD);
  console.log(process.env.HOST + ' ' + process.env.MYSQL_PASSWORD);
  console.log('*********');
  
  conn.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + conn.threadId);
  });
  
  // con.connect(function(err) {
  //   if (err) throw err;
  //   console.log('Connected to mysql server!');
  //   con.query(`CREATE DATABASE ${process.env.DATABASE}`, function (err, result) {
  //     if (err) throw err;
  //     console.log('Database created');
  //     console.log(result);
  //   });
  // });

};


export default createDatabase;