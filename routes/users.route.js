const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

/* POST new user. */
router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:idUser', userController.findOneUserById);

/**
 * PUT Route to update an user by id
 */
router.put ('/:idUser',userController.updateUser);
/**
 * DELETE Route to delete an user by username
 */
router.delete ('/:userName',userController.deleteUserByUsername);
/**
 * DELETE Route to delete all users
 */
router.delete ('/',userController.deleteAllUsers);

router.get ('/date/:a/:m/:d',userController.findAllUsersByCreatedDate);




module.exports = router;
