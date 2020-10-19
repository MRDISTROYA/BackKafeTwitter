const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');

/* POST new user. */
router.post('/', postController.createPost);
router.get('/', postController.getAllPosts);
router.get('/idpost/:idPost', postController.findOnePostById);
/**
 * PUT Route to update an post by id
 */
router.put ('/:idPost',postController.updatePost);
/**
 * DELETE Route to delete an post by id
 */
router.delete ('/:idPost',postController.deletePostById);
/**
 * DELETE Route to delete all posts
 */
router.delete ('/',postController.deleteAllPost);


module.exports = router;
  