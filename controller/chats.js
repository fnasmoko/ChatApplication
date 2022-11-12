const { text } = require('body-parser');
const db = require('../database/config');

//get chat
const showChats = (req, res) => {
    db.query("SELECT * FROM chats", (err, result) => {
        if(err) throw err;
        res.status(200).send(result)
    })
}

const showPersonalChats = (req, res) => {
    const sender_id = req.params.sender_id
    const receiver_id = req.params.receiver_id
    console.log(sender_id, receiver_id);
    //validation
    if(isNaN(sender_id) || isNaN(receiver_id)) {return res.status(400).send('Id should be integer') }

    const sqlQuery = "SELECT * FROM chats where (sender_id = ? and receiver_id = ?) or (sender_id = ? and receiver_id = ?)";
    db.query(sqlQuery, [sender_id, receiver_id, receiver_id, sender_id], (err, result) => {
        if(err) throw err;
        res.status(200).json(result)
    })
}

const showGroupChats = (req, res) => {
    const receiver_id = req.params.receiver_id
    console.log(receiver_id);
    //validation
    if(isNaN(receiver_id)) {return res.status(400).send('Id should be integer') }

    const sqlQuery = "SELECT * FROM chats where receiver_id = ?";
    db.query(sqlQuery, [receiver_id], (err, result) => {
        if(err) throw err;
        res.status(200).json(result)
    })
}

//add personal chat
const addChat = (req, res) => {
    const {sender_id, receiver_id, text} = req.body;

    //validation
    if(isNaN(sender_id)) {return res.status(400).send('Id should be integer') }
    if(isNaN(receiver_id)) {return res.status(400).send('Id should be integer') }
    if(text == undefined){return res.status(400).send('Please input data completely')}

    const sqlQuery = "INSERT INTO chats (sender_id, receiver_id, text) VALUES (?, ?, ?)";
    db.query(sqlQuery, [sender_id, receiver_id, text], (err, result) => {
        if(err) throw err;
        res.status(200).json({message: 'Chat added successfully'})
    })
}

// edit chat by chat ID
const editChat = (req, res) => {
    const id = req.params.id
    const {text} = req.body;

    //validation
    if(isNaN(id)) {return res.status(400).send('Id should be integer') }
    if(text == undefined){return res.status(400).send('Please input data completely')}


    const sqlQuery = "update chats set text = ? where id = ?";
    db.query(sqlQuery, [text, id], (err, result) => {
        if(err) throw err;
        res.status(200).json({message: `Chat with id ${id} has been updated`});
    })
}


//delete chat by ID
const deleteChat = (req, res) => {
    const id = req.params.id

    //validation
    if(isNaN(id)) {return res.status(400).send('Id should be integer') }

    const sqlQuery = "DELETE FROM chats WHERE id = ?";
    db.query(sqlQuery, id, (err, result) => {
        if(err) throw err;
        res.status(200).json({message: `Chat with id ${id} has been deleted`});
    })
}

const deletePersonalChat = (req, res) => {
    const sender_id = req.params.sender_id
    const receiver_id = req.params.receiver_id
    console.log(sender_id, receiver_id);
    //validation
    if(isNaN(sender_id) || isNaN(receiver_id)) {return res.status(400).send('Id should be integer') }

    const sqlQuery = "delete * FROM chats where (sender_id = ? and receiver_id = ?) or (sender_id = ? and receiver_id = ?)";
    db.query(sqlQuery, [sender_id, receiver_id, receiver_id, sender_id], (err, result) => {
        if(err) throw err;
        res.status(200).json({message: `Chat with sender_id ${sender_id} and receiver_id ${receiver_id} has been deleted`});
    })
}

const deleteGroupChat = (req, res) => {
    const id = req.params.id

    //validation
    if(isNaN(id)) {return res.status(400).send('Id should be integer') }

    const sqlQuery = "DELETE FROM chats WHERE receiver_id = ?";
    db.query(sqlQuery, id, (err, result) => {
        if(err) throw err;
        res.status(200).json({message: `Chat with receiver_id ${id} has been deleted`});
    })
}


module.exports = {showChats, showPersonalChats, showGroupChats, addChat, editChat, deleteChat, deletePersonalChat, deleteGroupChat} 
