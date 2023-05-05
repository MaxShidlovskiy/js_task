const arr = [
  { id: 1, title: 'javascript' },
  { id: 2, title: 'typescript' },
  { id: 3, title: 'mongodb' },
  { id: 4, title: 'mongoose' },
  { id: 5, title: 'pg' },
];

function getAllSkills() {
  return arr;
}

function getSkillById(id) {
  const filtered = arr.filter(el => el.id == id);
  return filtered;
}

function deleteSkill(id) {
  const filtered = arr.filter(el => el.id != id)
  return filtered
}

function createSkill(title) {
  const obj = { title, id: Math.floor(Math.random()*10) }
  arr.push(obj);
  return arr;
}

module.exports = { getAllSkills, getSkillById, deleteSkill, createSkill };
