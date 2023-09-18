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

app.post('/register', async (req, res) => {
    const authService = require('./services/authService');
    // If dont't word remove try catch

    const { email, username, password, repeatPassword } = req.body;
    // const { email, username, password, repeatPassword } = req.body;

    const result = await authService.register(username, email, password, repeatPassword);
    res.json(result);
})

app.use(routes);

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/greeting_cards');

app.listen(3030, () => console.log('Server is listening on port 3030...'));