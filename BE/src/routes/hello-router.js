const { Router } = require("express");
const HelloRouter = Router();

HelloRouter.get("/", (req, res) => {
  res.send("HELLO");
});

module.exports = HelloRouter;
