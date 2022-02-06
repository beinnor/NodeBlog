import mysql from 'mysql';

const createDatabase = () => {

  const conn = mysql.createConnection({
    host     : process.env.HOST,
    user     : process.env.USER,
    password : process.env.PASSWORD,
  });
  

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