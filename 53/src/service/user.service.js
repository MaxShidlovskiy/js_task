const fs = require(`fs`);
const path = `./storage/storage.json`;


function getAllUsers() {
    const array = JSON.parse(fs.readFileSync(path));
    return array
}

function getUserById(id) {
    const array = JSON.parse(fs.readFileSync(path));
    const filtered = array.filter(el => el.id == id)
    return filtered
}

function createUser(name, surname, email, pwd) {
    const array = JSON.parse(fs.readFileSync(path));
    const obj = {
        name: name,
        surname: surname,
        email: email,
        pwd: pwd
    }
    array.push(obj)
    fs.writeFileSync(path, JSON.stringify(array))
    return array
}

function updateUserById(id, name, surname, email, pwd) {
    const array = JSON.parse(fs.readFileSync(path));
    const filtered = array.filter(el => el.id != id)
    if(array.length == filtered.length) throw new Error(`id is not a found`)
    const obj = {
        id: array.length + 1,
        name: name,
        surname: surname,
        email: email,
        pwd: pwd
    }
    filtered.push(obj)
    fs.writeFileSync(path, JSON.stringify(filtered))
    return filtered
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById
}