const jwt = require("jsonwebtoken");
const User = require("../models/user-schema");

const auth = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401);

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decode.userId });

    if (!user) {
      return res.status(400).send("사용자를 찾을 수 없습니다.");
    }
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = auth;
