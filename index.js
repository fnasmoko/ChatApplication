const express = require('express');
const users = require('./routes/users');
const chats = require('./routes/chats');
const token = require('./routes/token');

const app = express();
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Welcome to chat application')
})

app.use('/users', users)

app.use('/chats', chats)

app.use('/token', token)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
}) 
