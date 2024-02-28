const express = require("express");
const UserRouter = express.Router();
const User = require("../models/user-schema");
const JWT = require("jsonwebtoken");
const auth = require("../middleware/auth");

// Register
UserRouter.post("/register", async (req, res, next) => {
  try {
    const user = new User(req.body);
    await user.save();
    return res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

// Login
UserRouter.post("/login", async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send("Auth failed, email not found");
    }
    const isMatch = await user.comparePassword(req.body.password);
    if (!isMatch) {
      return res.status(400).send("Wrong password");
    }
    const payload = {
      userId: user._id.toHexString(),
    };
    const accessToken = JWT.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return res.json({ user, accessToken });
  } catch (error) {
    next(error);
  }
});

// Auth by Token
UserRouter.get("/auth", auth, async (req, res, next) => {
  return res.json({
    id: req.user._id,
    email: req.user.email,
    name: req.user.name,
    role: req.user.role,
    image: req.user.image,
    cart: req.user.cart,
    history: req.user.history
  });
});

// Logout
UserRouter.post("/logout", auth, async (req, res, next) => {
  try {
    return res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

UserRouter.post("/cart", auth, async (req, res, next) => {
  try {
    const userInfo = await User.findOne({ _id: req.user._id })
    // 이미 등록할 상품이 존재하는 지 체크
    let duplicate = false;
    userInfo.cart.forEach((item) => {
      if (item.id === req.body.productId) {
        duplicate = true;
      }
    });

    // duplicate = true 일 경우
    if (duplicate) {
      const user = await User.findOneAndUpdate(
        { _id: req.user._id, "cart_id": req.body.productId },
        { $inc: { "cart.$.quantity": 1 } },
        { new: true }
      )
      return res.status(201).send(user.cart);
    }
    // duplicate = false 일 경우
    else {
      const user = await User.findOneAndUpdate(
        { _id: req.user._id },
        {
          $push: {
            cart: {
              id: req.body.productId,
              quantity: 1,
              date: Date.now()
            }
          }
        },
        { new: true }
      )
      return res.status(201).send(user.cart);
    }
  } catch (error) {

  }
});

module.exports = UserRouter;
