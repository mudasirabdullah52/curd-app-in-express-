
const User = require('../models/user');
const mysql = require('mysql2');
// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mudasir@1231',
    database: 'appointment-db',
});

// Connect to MySQL
db.connect();


exports.getIndex = (req, res, next) => {
    console.log("hello from the controller")
    res.render('index', { pageTitle: 'Page Not Found', path: '/view/index' });
};

exports.postExpense = (req, res) => {
    const { amount, description, category } = req.body;
    console.log(req.body)
    User.create({
        amount: amount,
        description: description,
        category: category
    }).then(result => {
        console.log(result);
        res.redirect('/')
    })
        .catch(err => {
            console.log(err);
        });

};

exports.getExpense = (req, res, next) => {
    // Product.findAll()
    const sql = 'SELECT * FROM expenses';
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).send('Error fetching exoeneses');
        } else {
            res.status(200).json(result);

        }
    });

};

exports.getExpense = (req, res, next) => {

    const sql = 'SELECT * FROM expenses';
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).send('Error fetching exoeneses');
        } else {
            res.status(200).json(result);

        }
    });

};
// Delete api
exports.deleteExpenses = ('/delete/:id', (req, res) => {
    const userId = req.params.id;
    const sql = 'DELETE FROM expenses WHERE id = ?';
    db.query(sql, [userId], (err, result) => {
        if (err) {
            res.status(500).send('Error deleting user');
        } else {
            res.status(200).send('User deleted successfully');
        }
    });
});
