const express = require(`express`);
const bodyParser = require(`body-parser`);
const rout = require(`./controller/skill.controller`);
const app = express();

app.use(bodyParser.json());
app.use(`/skill`, rout);

module.exports = app;
