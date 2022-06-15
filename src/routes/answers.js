const Router = require("express").Router();
const { sendAnswers } = require("../controllers/answer");

Router.post("/answers", sendAnswers);

module.exports = Router;
