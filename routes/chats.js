const express = require('express');
const {showChats, showPersonalChats, showGroupChats, addChat, editChat, deleteChat, deletePersonalChat, deleteGroupChat} = require('../controller/chats');
const verifyToken = require('../validate/verifytoken');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/', verifyToken, showChats)
router.get('/:sender_id-:receiver_id', verifyToken, showPersonalChats)
router.get('/:receiver_id', verifyToken, showGroupChats)

router.post('/', verifyToken, addChat)

router.put('/:id', verifyToken, editChat)

router.delete('/:id', verifyToken, deleteChat)
router.delete('/:sender_id-:receiver_id', verifyToken, deletePersonalChat)
router.delete('/group/:id', verifyToken, deleteGroupChat)


module.exports = router;