const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

//router
const HelloRouter = require("./routes/hello-router");
const UserRouter = require("./routes/users-router");
const ProductRouter = require("./routes/product-router");

app.use("/api/v1", HelloRouter);
app.use('/api/v1/users', UserRouter);
app.use('/api/v1/products', ProductRouter);
app.use(express.static(path.join(__dirname, "../uploads")));

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
