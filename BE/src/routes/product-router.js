const express = require("express");
const ProductRouter = express.Router();
const Product = require("../models/product-schema");
const auth = require("../middleware/auth");
const multer = require("multer");

// Upload Product
ProductRouter.post("/", auth, async (req, res, next) => {
  try {
    const product = new Product(req.body);
    product.save();
    return res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});

// Image
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage }).single("file");

ProductRouter.post("/image", auth, async (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      return req.status(500).send(err);
    }
    return res.json({ fileName: res.req.file.filename });
  });
});

ProductRouter.get("/", async (req, res, next) => {
  try {
    const products = await Product.find().populate('writer');
    return res.status(200).json({
      products
    })
  } catch (error) {
    next(error)
  }
});


module.exports = ProductRouter;
