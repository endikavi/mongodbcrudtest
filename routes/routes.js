const express = require('express');

const router = express.Router();

const userController = require('../controllers/UserController');

router.get('/', userController.GetAllUsers);
router.get('/:_id', userController.GetUser);
router.post('/', userController.AddUser);
router.put('/:_id', userController.UpdateUser);
router.delete('/:_id', userController.DeleteUser);

module.exports = router;