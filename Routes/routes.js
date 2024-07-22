const personroutes = require("express").Router();
const { personinfo, findinfo } = require("../Controllers/controllers");

personroutes.post("/person", personinfo);
personroutes.get("/person", findinfo);

module.exports = { personroutes };
