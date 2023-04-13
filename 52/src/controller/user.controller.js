const express = require(`express`);
const {
    getAllUsers,
    getById,
    createUser,
    updateData
} = require(`../servise/user.service.js`)
const route = express.Router();

route.get(`/`, (req, res) => {
    try {
        const data = getAllUsers()
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
})

route.get(`/:id`, (req, res) => {
    try {
        const {
            id
        } = req.params;
        const data = getById(id)
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
})

route.post(`/`, (req, res) => {
    try {
        const {
            name,
            surname,
            email,
            pwd
        } = req.body;
        res.send(createUser(name, surname, email, pwd))
    } catch (error) {
        res.send(error.message)
    }

})

route.put(`/:id`, (req, res) => {
    try {
        const {
            id
        } = req.params;
        const {
            name,
            surname,
            email,
            pwd
        } = req.body;
        const data = updateData(id, name, surname, email, pwd);
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
})

module.exports = {
    route
};