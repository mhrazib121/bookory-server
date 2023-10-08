import express from "express";
import { WishlistController } from "./wishlist.controller";
const router = express.Router();

router.get("/", WishlistController.getWishlist);
router.get("/book-details", WishlistController.getSingleWishlist);
router.post("/add-wishbook", WishlistController.addWishBook);
router.delete("/remove-wishbook", WishlistController.removeWishBook);
router.patch("/updateStatus/:id", WishlistController.updateReadingStatus);

export const WishlistRoutes = router;
