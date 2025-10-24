const express = require("express");

const app = express();

const PORT = 3000;

app.use("/test",(req, res) => {
  res.send("Hello from the server!!! Hold we're testing");
});

app.use("/",(req, res) => {
  res.send("Hello from the server!!!");
});

app.listen(PORT, () => {
  console.log(`Server is up and running at ${PORT}`);
});
