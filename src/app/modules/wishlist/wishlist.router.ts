import express from "express";
import { WishlistController } from "./wishlist.controller";
const router = express.Router();

router.post("/", WishlistController.addWishBook);

export const WishlistRoutes = router;
