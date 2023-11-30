const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user-routes');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const sequelize = require('./database/dbconnection');

app.set('view engine', 'ejs');

// Create
app.use(userRoutes);

sequelize
    // .sync({ force: true })
    .sync()
    .then(result => {
        // console.log(result);
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    });

