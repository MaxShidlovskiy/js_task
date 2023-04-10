const express = require(`express`);
const app = express();
const port = 3000;

app.get(`/`, function (request, response) {
    const arr = [1, 2, 2, 4, 4]
    let arrUniq = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != arr[i + 1] && arr[i] != arr[i - 1]) {
            arrUniq.push(arr[i])
        }
    }
    response.send(arrUniq)
});
app.get(`/about`, function (request, response) {
    response.send(`/about`)
});

app.get(`/concact`, function (request, response) {
    response.send(`/concact`)
});

app.get(`/test/:id/:name/hi`, function (request, response) {
    const {
        id,
        name
    } = request.params
    response.send([id, name])
})

app.get(`/:id`, function (request, response) {
    const {
        id
    } = request.params;
    const arr = [1, 2, 3, 4, 5, 6];
    let wrapper = [];
    let temp = [];

    for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i])
        if (temp.length == id) {
            wrapper.push(temp);
            temp = [];
        }
    }
    response.send(wrapper)
})

app.listen(port, () => {
    console.log(`server is running of port ${port}`);
})