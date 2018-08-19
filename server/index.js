const express = require("express");
const parser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./db/config");
const model = require("./db");
const router = require("./router");
// middleware
app.use(parser.urlencoded({ limit: "20mb", extended: true }));
app.use(parser.json({ limit: "20mb" }));
app.use(express.static(path.join(__dirname, "../static")));

app.use("/api", router);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../static/index.html"));
});
// have express instance listen in on a PORT
app.listen(PORT, err => {
  if (err) {
    console.log("there was an error in the server! ", err);
  } else {
    console.log("Successfully connected to the server", PORT);
  }
});
