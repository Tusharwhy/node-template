const express = require("express");
const cors = require("cors");
const app = express();

// import routes.

app.use(cors());
app.use(express.json());

// Testing route for server
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server welcomes you 🙏" });
});
module.exports = app;
