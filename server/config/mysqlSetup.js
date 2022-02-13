import mysql from 'mysql';
import 'dotenv/config';

const conn = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_LOCAL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

export { conn };