import express from 'express';
import { getAllPosts, getAPost } from '../controllers/postsController.js';

const router = express.Router();

/* GET all posts. */
router.get('/', getAllPosts);

/* GET one post by id. */
router.get('/:id', getAPost);

/* Post. */
router.post('/', (req, res) => {
  res.send('posted something');
});

/* PUT one post by id. */
router.put('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`put by id: ${id}`);
});

/* DELETE one post by id. */
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`delete by id: ${id}`);
});

export default router;
