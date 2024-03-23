const express = require("express");
const UserRouter = express.Router();
const User = require("../models/user-schema");
const Product = require("../models/product-schema");
const Payment = require("../models/payment-schema");
const JWT = require("jsonwebtoken");
const auth = require("../middleware/auth");
const crypto = require("crypto");


// GET /api/v1/users/auth - Auth by Token
UserRouter.get("/auth", auth, async (req, res, next) => {
  try {
    const user = req.user;
    return res.json({
      id: user._id,
      email: user.email,
      name: user.name,
      role: user.role,
      phone: user.phone,
      image: user.image,
      cart: user.cart,
      like: user.like,
      history: user.history,
    });
  } catch (error) {
    next(error);
  }
});


// GET /api/v1/users - 모든 사용자 정보 가져오기
UserRouter.get("/", async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

// GET /api/v1/users/:id - 특정 사용자 정보 가져오기
UserRouter.get("/:userId", async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "사용자를 찾을 수 없습니다." });
    }
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

// POST /api/v1/users/login - 로그인
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

// POST /api/v1/users/register - 회원가입
// email, name, password
UserRouter.post("/register", async (req, res, next) => {
  try {
    const user = new User(req.body);
    await user.save();
    return res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
});

// POST /api/v1/users/logout - 로그아웃
UserRouter.post("/logout", auth, async (req, res, next) => {
  try {
    return res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

UserRouter.post("/cart", auth, async (req, res, next) => {
  try {
    const userInfo = await User.findOne({ _id: req.user._id });
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
        { _id: req.user._id, "cart.id": req.body.productId },
        { $inc: { "cart.$.quantity": 1 } },
        { new: true }
      );

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
              date: Date.now(),
            },
          },
        },
        { new: true }
      );
      return res.status(201).send(user.cart);
    }
  } catch (error) {
    next(error);
  }
});

// Delete Cart
UserRouter.delete("/cart", auth, async (req, res, next) => {
  try {
    const userInfo = await User.findOneAndUpdate(
      { _id: req.user._id },
      {
        $pull: {
          cart: { id: req.query.productId },
        },
      },
      { new: true }
    );
    const cart = userInfo.cart;
    const array = cart.map((item) => {
      return item.id;
    });

    const productInfo = await Product.find({ _id: { $in: array } }).populate(
      "writer"
    );
    return res.json({
      productInfo,
      cart,
    });
  } catch (error) {
    next(error);
  }
});

// Payment
UserRouter.post("/payment", auth, async (req, res) => {
  try {
    // UserCollection안에 History필드 안에 간단한 결제 정보 넣어주기
    let history = [];
    let transactionData = {};
    req.body.cartDetail.forEach((item) => {
      history.push({
        dateOfPurchase: new Date().toISOString(),
        name: item.title,
        id: item._id,
        price: item.price,
        quantity: item.quantity,
        paymentId: crypto.randomUUID(),
      });
    });

    // PaymentCollection안에 자세한 결제 정보를 넣어주기
    transactionData.user = {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
    };
    transactionData.product = history;

    // UserCollection
    await User.findOneAndUpdate(
      { _id: req.user._id },
      { $push: { history: { $each: history } }, $set: { cart: [] } }
    );

    // PaymentCollection
    const payment = new Payment(transactionData);
    const paymentDocs = await payment.save();

    let products = [];
    paymentDocs.product.forEach((item) => {
      products.push({ id: item.id, quantity: item.quantity });
    });

    // Update sold count for each product
    await Promise.all(
      products.map(async (item) => {
        await Product.updateOne(
          { _id: item.id },
          { $inc: { sold: item.quantity } }
        );
      })
    );

    return res.sendStatus(200);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = UserRouter;
