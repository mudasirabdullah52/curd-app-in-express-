// app.js
const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models/userModel');
const userController = require('./cantrollers/userController');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static('public'));

// Routes
app.get('/api/users', userController.getAllUsers);
app.post('/api/users', userController.addUser);
app.put('/api/users/:id', userController.updateUser);
app.delete('/api/users/:id', userController.deleteUser);

// Sync Sequelize models with the database
sequelize.sync()
    .then(() => {
        // Start the server after syncing models
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch(err => console.error('Error syncing models:', err));
