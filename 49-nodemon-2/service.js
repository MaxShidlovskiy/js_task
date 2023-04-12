const array = [{
        "id": "javascript",
        "label": "JavaScript",
        "category": "programmingLanguages",
        "priority": 1
    },
    {
        "id": "typescript",
        "label": "TypeScript",
        "category": "programmingLanguages",
        "priority": 1
    },
    {
        "id": "sql",
        "label": "SQL",
        "category": "programmingLanguages",
        "priority": 2
    },
    {
        "id": "java",
        "label": "Java",
        "category": "programmingLanguages",
        "priority": 3
    },
    {
        "id": "go",
        "label": "GO",
        "category": "programmingLanguages",
        "priority": 3
    },
    {
        "id": "firebasestorage",
        "label": "Firebase Storage",
        "category": "databases",
        "priority": 2
    },
    {
        "id": "ibmcloudant",
        "label": "IBM Cloudant",
        "category": "databases",
        "priority": 2
    },
    {
        "id": "react",
        "label": "React",
        "category": "webTechnologies",
        "priority": 1
    },
    {
        "id": "angularjs",
        "label": "ANGULARJS",
        "category": "webTechnologies",
        "priority": 1
    },
    {
        "id": "redux",
        "label": "Redux",
        "category": "webTechnologies",
        "priority": 1
    },
    {
        "id": "materialui",
        "label": "Material UI",
        "category": "webTechnologies",
        "priority": 1
    },
    {
        "id": "git",
        "label": "Git",
        "category": "otherSkills",
        "priority": 2
    },
    {
        "id": "adobephotoshop",
        "label": "Adobe Photoshop",
        "category": "otherSkills",
        "priority": 2
    },
]

function getAll() {
    return array;
}

function getDataById(id) {
    let filtered = array.filter(el => el.id == id);
    return filtered;
}

function createData(label, category, priority) {
    const object = {
        id: label.toLowerCase(),
        label: label,
        category: category,
        priority: priority
    }
    array.push(object)
    return array
}

function updateData(id, label, category, priority) {
    const filtered = array.filter(el => el.id != id)
    if (filtered.length != array.length) {
        const obj = {
            id: id,
            label: label,
            category: category,
            priority: priority
        }
        filtered.push(obj);
        return filtered;
    } else {
        return `id is not exists`
    }
}

function deleteData(id){
    const filtered = array.filter(el => el.id !==id)
      return filtered;
}

module.exports = {
    getAll,
    getDataById,
    createData,
    updateData,
    deleteData
}