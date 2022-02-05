import express from 'express';
const router = express.Router();

/* GET all posts. */
router.get('/', function(req, res) {
  res.send('all posts');
});

/* GET one post by id. */
router.get('/:id', function(req, res) {
  let id = req.params.id;
  res.send(`post by id: ${id}`);
});


/* Post. */
router.post('/', function(req, res) {  
  res.send('posted something');
});

/* PUT one post by id. */
router.put('/:id', function(req, res){
  let id = req.params.id;
  res.send(`put by id: ${id}`);
});

/* DELETE one post by id. */
router.delete('/:id', function(req, res){
  let id = req.params.id;
  res.send(`delete by id: ${id}`);
});

export default router;
