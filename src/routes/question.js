const Router = require("express").Router();
const { readQuestions } = require("../controllers/question");

Router.get("/question", readQuestions);

module.exports = Router;
