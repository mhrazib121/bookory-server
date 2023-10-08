"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistRoutes = void 0;
const express_1 = __importDefault(require("express"));
const wishlist_controller_1 = require("./wishlist.controller");
const router = express_1.default.Router();
router.get("/", wishlist_controller_1.WishlistController.getWishlist);
router.get("/book-details", wishlist_controller_1.WishlistController.getSingleWishlist);
router.post("/add-wishbook", wishlist_controller_1.WishlistController.addWishBook);
router.delete("/remove-wishbook", wishlist_controller_1.WishlistController.removeWishBook);
router.patch("/updateStatus/:id", wishlist_controller_1.WishlistController.updateReadingStatus);
exports.WishlistRoutes = router;
