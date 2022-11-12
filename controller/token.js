const db = require('../database/config');

require('dotenv').config()
const jwt = require('jsonwebtoken')

const token = (req, res) => {
    const username = "token"
    const user = {name: username}

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({"accessToken": accessToken})
}

const tokenRegister = (req, res) => {
    const username = "tokenRegist"
    const user = {name: username}

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: 86400})
    res.json({"accessToken": accessToken})
}

module.exports = {token, tokenRegister}