const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

app.use(cors());

// Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello REST API');
});

app.use(routes);

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/greeting_cards');

app.listen(3030, () => console.log('Server is listening on port 3030...'));