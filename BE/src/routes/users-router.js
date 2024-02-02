const express = require("express");
const UserRouter = express.Router();
const User = require("../models/user-schema");
const JWT = require("jsonwebtoken");

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
  // req.body : email , password(plainText)
  try {
    // 존재하는 유저인지 체크
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send("Auth failed, email not found");
    }
    // 비밀번호가 올바른지 체크
    const isMatch = await user.comparePassword(req.body.password);
    if (!isMatch) {
      return res.status(400).send("Wrong password");
    }
    const payload = {
      userId: user._id.toHexString(), // Obj Id 이기 때문에 String으로 변환
    }
    // Token 생성
    const accessToken = JWT.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    // 토큰 생성 후 유저와 토큰 데이터 응답으로 보내주기
    return res.json({ user, accessToken });
  } catch (error) {
    next(error);
  }
})


module.exports = UserRouter;