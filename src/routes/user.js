const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/UserController');

router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);

router.get('/users/:id', userController.getUserById);
router.put('users/:id', userController.updateUser);

router.delete('users/:id', userController.deleteUser);

module.exports = router;
