// controllers/userController.js
const userModel = require('../models/userModel');

class UserController {
    async getAllUsers(req, res) {
        try {
            const users = await userModel.findAll();
            res.json(users);
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }

    async addUser(req, res) {
        try {
            const { name, email } = req.body;
            const newUser = await userModel.create({ name, email });
            res.json(newUser);
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }

    async updateUser(req, res) {
        try {
            const userId = req.params.id;
            const { name, email } = req.body;

            const [updatedRows] = await userModel.update({ name, email }, { where: { id: userId } });

            if (updatedRows === 0) {
                return res.status(404).send('User not found');
            }

            const updatedUser = await userModel.findByPk(userId);
            res.json(updatedUser);
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }

    async deleteUser(req, res) {
        try {
            const userId = req.params.id;

            const deletedRows = await userModel.destroy({ where: { id: userId } });

            if (deletedRows === 0) {
                return res.status(404).send('User not found');
            }

            res.send('User deleted successfully');
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }
}

module.exports = new UserController();
