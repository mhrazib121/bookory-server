import express from "express";
import { WishlistController } from "./wishlist.controller";
const router = express.Router();

router.get("/", WishlistController.getWishlist);
router.post("/add-wishbook", WishlistController.addWishBook);
router.delete("/remove-wishbook", WishlistController.removeWishBook);
router.patch("/updateStatus/:id", WishlistController.updateReadingStatus);

export const WishlistRoutes = router;
