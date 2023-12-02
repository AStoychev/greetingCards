const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');

// This is middleware for owner user id
const { authentication } = require('./middlewares/authMiddlewares')

const app = express();

app.use(cors());

// Middleware
app.use(express.urlencoded({ extended: false }));
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

const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3000"
    }
});

// io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('join_room', (data) => {
        socket.join(data.room);
        console.log('User Joined Room:' + data.username);
    });


    // Try send auto meesage
    socket.on('say_hello', (data) => {
        socket.join(data.room);
        let content = {
            author: 'ChatBot',
            message: `Hello ${data.username} do you want some of our product or want to connect with our employee?`,
        }
        socket.emit('receive_automessage', content);
        console.log('Send Message', data.room, data.username);
    });

    function findWord(word, str) {
        return str.split(' ').some(function (w) { return w === word })
    }
    let context = {
        type: '',
        occasion: '',
        moreDetails: ''
    };
    socket.on('send_message', (data) => {
        // console.log(data)
        let message = data.content.message.toLowerCase();
        if (findWord('card', message)) {
            socket.emit('receive_automessage',
                {
                    author: 'ChatBot',
                    message: 'What occasion is the card for?'
                });
            context.type = 'card'
        }
        else if (findWord('birthday', message)) {
            socket.emit('receive_automessage',
                {
                    author: 'ChatBot',
                    message: 'Could you be a bit more detailed about gender and ages or would you like to see all the birthday cards?'
                });
            context.occasion = 'birthday'
        }
        else if (findWord('all', message)) {
            socket.emit('receive_automessage',
                {
                    author: 'ChatBot',
                    message: 'OK. Please wait a moment while I search for Birthday Cards :) ! '
                });
            context.moreDetails = 'all'
        }
        else {
            socket.emit('receive_automessage',
                {
                    author: 'ChatBot',
                    message: 'I can understand you! Could you ask your question in more detail or I can put you in touch with our operators'
                });
        }
        // console.log('Message:' + data.room, data.content)
        const findCard = require('./websocket/chatSearchCard');
        findCard.findCard(context.occasion).then(function(result){
        });
        
        console.log(context);
        socket.to(data.room).emit('receive_message', data.content);
    });
    // Try send auto meesage




    // socket.on('send_message', (data) => {
    //     console.log(data)
    //     // console.log('Message:' + data.room, data.content)
    //     socket.to(data.room).emit('receive_message', data.content);
    // });


    socket.on('disconnect', () => {
        console.log('USER DISCONNECTED')
    });
});