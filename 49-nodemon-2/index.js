const express = require(`express`);
const {
    getAll,
    getDataById,
    createData,
    updateData,
    deleteData
} = require(`./service`)
const bodyParser = require(`body-parser`);

const app = express();

app.use(bodyParser.json())

app.get(`/`, (req, res) => {
    const data = getAll()
    res.send(data)
});

app.get(`/:id`, (req, res) => {
    const {
        id
    } = req.params;
    const data = getDataById(id);
    res.send(data)
})

app.post(`/`, (req, res) => {
    const {
        label,
        category,
        priority
    } = req.body
    const data = createData(label, category, priority)
    res.send(data)
})

app.put(`/:id`, function (req, res) {
    const {
        id
    } = req.params;
    const {
        label,
        category,
        priority
    } = req.body;
    const data = updateData(id, label, category, priority);
    res.send(data);

})

app.delete(`/:id`, function (req, res) {
    const {
        id
    } = req.params;
    
    const data = deleteData(id);
    res.send(data);
})

app.listen(3000, () =>
    console.log(`server is startig`)
);