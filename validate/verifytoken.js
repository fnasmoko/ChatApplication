require('dotenv').config()
const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {

    const authHeader = req.headers['authorization']    
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.status(403).json({message: "Token is missing"})
    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            res.status(403).json({message: "Invalid token"})
        }
    })
    next()
}

module.exports = verifyToken 
