const Router = require("express").Router();
const { authValidation, verifyToken } = require("../controllers/auth");

Router.post("/auth", authValidation);
Router.get("/auth/verify", verifyToken);

module.exports = Router;
