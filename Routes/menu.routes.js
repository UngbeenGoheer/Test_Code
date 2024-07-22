const menuroutes = require("express").Router();
const { menuinfo, findMenu } = require("../Controllers/menu");
menuroutes.post("/menu", menuinfo);
menuroutes.get("/menu", findMenu);
module.exports = { menuroutes };
