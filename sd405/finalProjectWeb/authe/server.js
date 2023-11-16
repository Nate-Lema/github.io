const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Dummy database (in-memory storage, replace this with a real database)
const users = [];

app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    // Store user data in the database (you should hash the password before storing)
    users.push({ username, password });
    res.json({ message: 'User signed up successfully.' });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Check if the user exists in the database (you should compare hashed passwords)
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        res.json({ message: 'Login successful.' });
    } else {
        res.status(401).json({ message: 'Invalid credentials.' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});