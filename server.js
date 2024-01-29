const express = require("express");

const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  res.send("lorem is gud banda");
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}/`);
});
