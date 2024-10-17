const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const methodOverride = require("method-override");

const route = require("./routes");
const db = require("./config/db");
const app = express();
const port = 3000;

// Connect to DB
db.connect();

// Static file
app.use(express.static(path.join(__dirname, "public")));

// More method HTTP
app.use(methodOverride("_method"));

// Middleware form and body
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
// Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: "main",
    partialsDir: __dirname + "/resources/views/partials/",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// HTTP loggers
// app.use(morgan("combined"));

//Route init
route(app);

// Listening in terminal
app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port} 🔥🔥🔥`);
});
