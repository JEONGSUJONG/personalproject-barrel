const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      maxLength: 30,
      required: true
    },
    description: {
      type: String,
    },
    category: {
      type: Number,
      default: 1,
    },
    price: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
    images: {
      type: Array,
      default: [],
    },
    likeCount: {
      type: Number,
      default: 0
    },
    sold: {
      type: Number,
      default: 0
    },
    isLiked: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

productSchema.index(
  {
    title: "text",
    description: "text",
  },
  {
    weights: {
      title: 5,
      description: 1,
    },
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
