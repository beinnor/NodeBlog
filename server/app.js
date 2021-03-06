import 'dotenv/config';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import postsRouter from './routes/posts.js';
import usersRouter from './routes/users.js';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static('../public'));

// 
app.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: './public'
  });
});

app.use('/posts', postsRouter);
app.use('/users', usersRouter);

export default app;
