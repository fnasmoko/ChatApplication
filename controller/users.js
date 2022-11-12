const db = require('../database/config');

//get user of merchant service
const showUsers = (req, res) => {
    db.query("SELECT * FROM users", (err, result) => {
        if(err) throw err;
        res.status(200).send(result)
    })
}

//add user for merchant service
const addFoto = (req, res) => {
    const foto = req.body.foto

    const sqlQuery = "INSERT INTO photoTable (foto) VALUES (?)";
    db.query(sqlQuery, foto, (err, result) => {
        if(err) throw err;
        res.status(200).json({message: 'Foto added successfully'})
    })
}

//add user for merchant service
const addUser = (req, res) => {
    const {username, password} = req.body;
    console.log(req.body);

    //validation
    if (username == undefined){return res.status(400).send('Please input data completely')}
    if (password == undefined){return res.status(400).send('Please input data completely')}

    if(username.length <= 5 ){return res.status(400).send('username must be at least 5 characters')}
    if(username.length >= 255 ){return res.status(400).send('username must not more than 255 characters')}
    if(password.length < 6){return res.status(400).send('Password_merchant must be at least 6 characters')}

    const sqlQuery = "INSERT INTO users (username, password) VALUES (?, ?)";
    db.query(sqlQuery, [username, password], (err, result) => {
        if(err) throw err;
        res.status(200).json({message: 'User account added successfully'})
    })
}

//user can delete account by id
const deleteUser = (req, res) => {
    const id = req.params.id

    //validation
    if(isNaN(id)) {return res.status(400).send('Id should be integer') }

    
    const sqlQuery = "DELETE FROM users WHERE id = ?";
    db.query(sqlQuery, id, (err, result) => {
        if(err) throw err;
        res.status(200).json({message: `User with id ${id} has been deleted`});
    })
}


module.exports = {showUsers, addUser, addFoto, deleteUser}