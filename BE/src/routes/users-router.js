const express = require("express");
const UserRouter = express.Router();
const User = require("../models/user-schema");

UserRouter.post("/register", async (req, res, next) => {
  try {
    const user = new User(req.body);
    await user.save();
    return res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});


module.exports = UserRouter;