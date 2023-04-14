const express = require(`express`);
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById
} = require(`../service/user.service`)
const {
    isValidUserData
} = require(`../helper/validation`)

const route = express.Router();

route.get(`/`, (req, res) => {
    const data = getAllUsers()
    res.send(data)
})

route.get(`/:id`, (req, res) => {
    const {
        id
    } = req.params;
    const data = getUserById(id)
    res.send(data)
})
route.post(`/`, isValidUserData, (req, res) => {
    const { name, surname, email, pwd } = req.body;

    const data = createUser(name, surname, email, pwd)
    res.send(data)
})

route.put(`/:id`, isValidUserData, (req, res) => {
    const {
        id
    } = req.params;
    const { name, surname, email, pwd } = req.body;
    const data = updateUserById(id, name, surname, email, pwd)
    res.send(data)
})

module.exports = route;