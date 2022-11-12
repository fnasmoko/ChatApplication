const express = require('express');
const {showUsers, addUser, addFoto, deleteUser} = require('../controller/users');
const router = express.Router();
const bodyParser = require('body-parser');
const verifyToken = require('../validate/verifytoken');


router.use(bodyParser.json());

router.get('/', showUsers)

router.post('/', verifyToken, addUser)
router.post('/foto', addFoto)

router.delete('/:id', verifyToken, deleteUser)

module.exports = router;