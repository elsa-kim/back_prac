const express = require("express");
const bodyParser = require("body-parser");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const { PORT } = process.env;

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.listen(PORT);
