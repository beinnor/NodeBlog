import mysql from 'mysql';
import 'dotenv/config';

let connectionTries = 0;

const conn = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_LOCAL_PORT,
  user: process.env.MYSQL_ROOT_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE
});


const createDatabaseTable = async () => {
  // TODO: legg inn forsinkelse her slik at denne blir kjørt etter at mysql er oppe og går
  conn.connect((err) => {
    if (err) throw err;
    conn.query('CREATE TABLE Posts(PostId int, Title varchar(255), Body varchar(255));', (err, result) => {
      if (err) throw err;
      console.log('Table created');
      console.log(result);
    });
  });
};

export { conn, createDatabaseTable };