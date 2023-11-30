const path = require('path');
const express = require('express');

const userController = require('../cantrollers/user-controller');

const router = express.Router();

router.get('/', userController.getIndex);
router.post('/create', userController.postExpense);
router.get('/read', userController.getExpense);
router.delete('/delete/:id', userController.deleteExpenses);

module.exports = router;