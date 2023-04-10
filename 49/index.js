const express = require(`express`);
const bodyParser = require(`body-parser`);
const {
    getAll,
    getById,
    create
} = require(`./service.js`);

const app = express();

app.use(bodyParser.json())

app.get(`/`, function (req, res) {
    const data = getAll();
    res.send(data);
})

app.get(`/:id`, function (req, res) {
    const {
        id
    } = req.params;

    const elem = getById(id);
    res.send(elem);
})

app.post(`/`, function (req, res) {
    const {
        name,
        age
    } = req.body;
    const data = create(name, age);
    res.send(data)
})

app.listen(3000, function () {
    console.log(`Сервер запущен`);
})