// Importing the required modules
const express = require("express");
const router = express.Router();

// Import Controllers
const {
  getCartUser,
  ProductToCart,
  updateCartProduct,
  removeProductCart,
  purchaseCart
} = require("../controllers/cart");

// Import Middlewares
const {
  addProductToCartValidation,
  validationResults
} = require("../middlewares/validators");
const { validateSession } = require("../middlewares/auth");

// Routes
router.use(validateSession);

router.get("/", getCartUser);

router.post(
  "/add-product",
  addProductToCartValidation,
  validationResults,
  ProductToCart
);

router.patch("/update-product", updateCartProduct);

router.delete("/:productId", removeProductCart);

router.post("/purchase", purchaseCart);

module.exports = { cartRouter: router };