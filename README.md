# CHAT APPLICATION

Chat application adalah layanan komunikasi pesan text antara dua user atau lebih. Untuk melakukan pengiriman pesan, pengguna perlu melakukan registrasi terlebih dahulu untuk mendapatkan akun user. Ketika registrasi, pengguna perlu memiliki akses token. Pemilik layanan ini dapat menambahkan, menghapus, dan melihat akun akun pengguna. Untuk pengguna dapat mengirim, menghapus, dan mengubah pesan text ke akun lain yang sudah terdaftar.

Chat application is a text message communication service between two or more users. To send messages, users need to register first to get a user account. During registration, the user needs to have an access token. The owner of this service can add, delete and view user accounts. Users can send, delete and change text messages to other registered accounts.


## Entity Relationship Diagram
This is how entity relationship work shown by diagram.

![ERD - Chat Application](https://github.com/fnasmoko/ChatApplication/blob/main/ERD%20-%20Chat%20Application.png)


## Architecture Diagram Chat Application
This is a architecture diagram of chat application.

![Architecture Diagram Chat Application](https://github.com/fnasmoko/ChatApplication/blob/main/Architecture%20Diagram%20-%20Chat%20Apps.png)



## Postman Documentation Chat Application

Postman Chats Documentation - https://www.postman.com/red-robot-753222/workspace/chats/collection/23537085-1f3777de-b07a-421b-8b1d-649cb3ff9e67?action=share&creator=23537085
Postman Token Documentation - https://www.postman.com/red-robot-753222/workspace/token/collection/23537085-b1c33b42-c5c6-41f4-9f39-b09fc2394661?action=share&creator=23537085
Postman Users Documentation - https://www.postman.com/red-robot-753222/workspace/users/collection/23537085-90b49d81-9437-4ec5-8e8a-3a17d8b9e2f6?action=share&creator=23537085 



## List of API

These are the list of API /users
```
[GET] /users -> to get all user on chat application

[POST] /users -> to create account on chat application

[POST] /users/foto -> to add photo account on chat application

[DEL] /users/{id} -> to delete account on chat application
```

These are the list of API /chats
```
[GET] /chats -> to get all chats

[GET] /chats/{sender_id}-{receiver_id} -> to get all chat by receiver and sender id

[GET] /chats/{receiver_id} -> to get all chat by receiver id

[POST] /chats -> to add chat to a personal account or a group

[PUT] /chats/{id} -> to change chat by id

[DEL] /chats/{id} -> to delete chat by chat id

[DEL] /chats/{sender_id}-{receiver_id} -> to delete chat by sender and receiver id

[DEL] /chats/{id} -> to delete chat by receiver id
```

These are the list of API /token
```
[GET] /token -> to get token

[GET] /token/register -> to get token with limit 
```
