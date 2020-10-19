const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users.route");
const postsRouter = require("./routes/posts.route");
//IMPORT DB CONNECTION MANAGER
const dbManager = require("./database/db.manager");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/tweets", postsRouter);

dbManager.sequelizeConnection
  .authenticate()
  .then(() => {
    console.log("****** Connection has been stablished ******");
    dbManager.sequelizeConnection.sync().then(() => {
      console.log("Database Synced");
    });
  })
  .catch((err) => console.log("Unable to connect to the database...", err));

module.exports = app;
