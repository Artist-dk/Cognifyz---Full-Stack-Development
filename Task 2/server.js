const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

let formData = {};

app.get('/', (req, res) => {
    res.render('index', { usernameError: '', emailError: '' });
});

app.post('/submit', (req, res) => {
    const { username, email } = req.body;

    if (!username || !email) {
        return res.render('index', { usernameError: 'Please enter a username', emailError: 'Please enter an email' });
    }

    formData = { username, email };
    
    res.send('Form submitted successfully');
});

app.get('/data', (req, res) => {
    res.json(formData);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
