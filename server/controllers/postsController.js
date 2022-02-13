import mysql from 'mysql';
import 'dotenv/config';
import { conn } from '../config/mysqlSetup.js';

export const readAllPosts = (req, res, next) => {
     
      conn.query('SELECT * FROM Posts;', (err, result) => {
        if (err) console.log(err);              
        res.send(result);
      });
    
};

export const readAPost = (req, res, next) => {
  
  const { id } = req.params;

    conn.query('SELECT * FROM Posts WHERE PostId = ?;', [id], (err, result) => {
      if (err) console.log(err);
      res.send(result);
    });

};

export const createPost = (req, res, next) => {

  console.log("req.body.Title: " + req.body.Title);
  console.log("req.body.Body: " + req.body.Body);

  const newPost = {Title: req.body.Title, Body: req.body.Body};

    conn.query('INSERT INTO Posts SET ?;', newPost, (err, result) => {
      if (err) console.log(err);
      
      res.send(result);
    });
}

export const deletePost = (req, res, next) => {
  
  const { id } = req.params;

    conn.query('DELETE FROM Posts WHERE PostId = ?;', [id], (err, result) => {
      if (err) console.log(err);
      res.send(result);
    });
    
};

export const updatePost = (req, res, next) => {
  
  const { Title, Body } = req.body;
  const { id } = req.params;

    conn.query('UPDATE Posts SET Title = ?, Body = ? WHERE PostId = ?;', [Title, Body, id], (err, result) => {
      if (err) console.log(err);
      res.send(result);
    });

};
