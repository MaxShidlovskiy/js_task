const fs = require(`fs`);

const path = `./storage/storage.json`;

function getAll() {
    const array = JSON.parse(fs.readFileSync(path));
    return array
}

function getById(id) {
    const array = JSON.parse(fs.readFileSync(path));
    let filtered = array.filter(el => el.id == id);
    return filtered;
}

function createData(label, category, priority) {
    const array = JSON.parse(fs.readFileSync(path));
    array.push({
        label: label,
        category: category,
        priority: priority
    })
    fs.writeFileSync(path,JSON.stringify(array))
    return array
}


module.exports = {
    getAll,
    getById,
    createData
};