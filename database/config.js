const mysql = require('mysql');

// MYSQL config

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "17kosongsembilan",
    database: "chat_application"
});

db.connect(function(error) {
    if(error){
        console.error(error);
    } else {
        console.info("Connected to Database");
    }
});

module.exports = db 
