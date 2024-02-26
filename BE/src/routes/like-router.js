const express = require("express");
const LikeRouter = express.Router();
const Like = require("../models/like-schema");
const Product = require("../models/product-schema");
const auth = require("../middleware/auth");

LikeRouter.put("/:productId", auth, async (req, res, next) => {
  const { productId } = req.params;
  const userId = req.user._id;

  try {
    let message = "";
    let isLiked = false;

    // 좋아요 존재 여부 확인
    const existingLike = await Like.findOne({
      product: productId,
      user: userId,
    });

    if (existingLike) {
      // 좋아요 취소
      await Like.deleteOne({ product: productId, user: userId });
      await Product.findByIdAndUpdate(productId, {
        $inc: { likeCount: -1 },
        isLiked: false,
      });
      message = "좋아요가 취소되었습니다.";
    } else {
      // 좋아요 추가
      const newLike = new Like({ product: productId, user: userId });
      await newLike.save();
      await Product.findByIdAndUpdate(productId, {
        $inc: { likeCount: 1 },
        isLiked: true,
      });
      message = "좋아요가 추가되었습니다.";
      isLiked = true;
    }

    return res.status(200).json({ message, isLiked });
  } catch (error) {
    next(error);
  }
});

module.exports = LikeRouter;



// 좋아요 누른 제품 목록 조회
LikeRouter.get("/liked-products", auth, async (req, res, next) => {
  const userId = req.user._id;
  try {
    const likedProducts = await Like.find({ user: userId }).populate("product");
    res.status(200).json({ likedProducts });
  } catch (error) {
    next(error);
  }
});

module.exports = LikeRouter;
