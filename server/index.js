const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');

// This is middleware for owner user id
const { authentication} = require('./middlewares/authMiddlewares')

const app = express();

app.use(cors());

// Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(authentication());

app.get('/', (req, res) => {
    res.send('Hello REST API');
});

app.use(routes);

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/greeting_cards');


// WebSocket
const socket = require('socket.io');

app.use(express.json());

// WebSocket

const server = app.listen(3030, () => console.log('Server is listening on port 3030...'));

io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('join_room', (data) => {
        socket.join(data)
        console.log('User Joined Room:' + data)
    })


    socket.on('disconnect', () => {
        console.log('USER DISCONNECTED')
    })
})