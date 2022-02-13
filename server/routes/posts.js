import express from 'express';
import { readAllPosts, readAPost, createPost, deletePost, updatePost } from '../controllers/postsController.js';

const router = express.Router();

/* GET all posts. */
router.get('/', readAllPosts);

/* GET one post by id. */
router.get('/:id', readAPost);  

/* POST; Create a post */
router.post('/', createPost);

/* PUT; update a post. */
router.put('/:id', updatePost);

/* DELETE one post by id. */
router.delete('/:id', deletePost);

export default router;
