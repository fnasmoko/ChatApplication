const mysql = require('mysql');

// CONNECT TO MYSQL APPLICATION
const db_chatApps = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "17kosongsembilan",
});

db_chatApps.connect(function(error) {
    if(error){
        console.error(error);
    } else {
        console.info("Connected to Database");
    }
});


// CREATE DATABASE
const create_chatApps = "CREATE DATABASE chat_application";

db.query(create_chatApps, function (err, result) {
    if (err) throw err;
    console.log("Database created");
});


// CONNECT TO CHAT APP DATABASE
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "17kosongsembilan",
    database: "chat_application"
});


// CREATE TABLE
const users_table = `CREATE TABLE users 
            (
                id          int NOT NULL AUTO_INCREMENT,
                password    VARCHAR(255) NOT NULL, 
                name        VARCHAR(255) NOT NULL, 
                PRIMARY KEY (id)
            )`;
const chats_table = `CREATE TABLE chats
            (
                id              int NOT NULL AUTO_INCREMENT,
                last_user_id    int NOT NULL, 
                last_message_id int NOT NULL,                
                PRIMARY KEY (id),
                foreign key (last_user_id) references users(id),
                foreign key (last_message_id) references chats(id)
            )`;

const messages_table = `CREATE TABLE messages
            (
                id              int NOT NULL AUTO_INCREMENT,
                user_id         int NOT NULL, 
                chat_id         int NOT NULL,                
                created_at      date NOT NULL,
                PRIMARY KEY (id),
                foreign key (user_id) references users(id),
                foreign key (chat_id) references chats(id)
            )`;

db_chatApps.query(users_table, function (err, result) {
    if (err) throw err;
    console.log("Table Users Created");
});

db_chatApps.query(chats_table, function (err, result) {
    if (err) throw err;
    console.log("Table Chats Created");
});

db_chatApps.query(messages_table, function (err, result) {
    if (err) throw err;
    console.log("Table Messages Created");
}); 
