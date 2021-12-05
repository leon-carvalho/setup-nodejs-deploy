const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  const { sayHello } = require("./services/sayHelloWorld");

  response.send(sayHello());
});

module.exports = { app };
