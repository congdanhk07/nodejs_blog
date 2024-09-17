const express = require("express");
const app = express();
const port = 3000;

// DEFINE ROUTE
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// PORT RUN
app.listen(port, () => {
  console.log(`Im learning NodeJS at http://localhost:${port}`);
});
