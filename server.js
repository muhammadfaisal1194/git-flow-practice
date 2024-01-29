const express = require("express");

const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  res.send("api res");
});
app.get("/ping", (req, res) => {
  res.send("server is running");
});
app.get("/new", (req, res) => {
  res.send("server is running");
});
app.get("/data", (req, res) => {
  res.send("server is running");
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}/`);
});
