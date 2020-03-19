const path = require("path");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const recipesRouter = require("./routers/recipesRouter");
const ingredientsRouter = require("./routers/ingredientsRouter");

const server = express();

server.use(express.static(path.join(__dirname, "client/build")));
server.use(express.json());
server.use(cors());
server.use(helmet());
server.use("/api/recipes", recipesRouter);
server.use("/api/ingredients", ingredientsRouter);

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

module.exports = server;
