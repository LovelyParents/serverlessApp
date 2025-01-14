const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.get("/getTodos", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.get("/getTodo/:todoId", (req, res, next) => {  
  return res.status(200).json({
    message: "req.params.todoId",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

exports.handler = serverless(app);
