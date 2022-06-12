-require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const config = require("./config");

const app = express();

//CONFIG

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//ROUTES
app.use(require("./routes/auth"));

app.listen(config.PORT, () =>
  console.log("SERVER RUNNING ON PORT: " + config.PORT)
);
