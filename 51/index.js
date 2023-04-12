const express = require(`express`);
const {
    getAll,
    getById,
    createData
} = require(`./servise/service.js`);
const bodyParser = require(`body-parser`);

const app = express();

app.use(bodyParser.json())

app.get(`/`, function (req, res) {
    try {
        const data = getAll()
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }

});

app.get(`/:id`, function (req, res) {
    try {
        const {
            id
        } = req.params
        const data = getById(id)
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }

})

app.post(`/`, function (req, res) {
    try {
        const {
            label,
            category,
            priority
        } = req.body
        const data = createData(label, category, priority)
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
})

app.listen(3000, function () {
    console.log(`Сервер запущен`);
})