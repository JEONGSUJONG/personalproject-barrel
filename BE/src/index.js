const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());

app.get("/", (req, res, next) => {
  setImmediate(() => {
    next(new Error("This is Error"));
  });
});

app.use((error, req, res, next) => {
  res.status(500).send(error.message || "Internal Server Error");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.use(express.static("public"));

// mongoose
mongoose
  .connect(process.env.MONGO_URL, {
    dbName: process.env.MONGO_DB_NAME,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

//PORT
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
