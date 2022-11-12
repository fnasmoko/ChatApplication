const express = require('express');
require('dotenv').config()
const jwt = require('jsonwebtoken')

const {token, tokenRegister} = require('../controller/token');
const router = express.Router();

router.get('/', token)
router.get('/register', tokenRegister)

module.exports = router; 
