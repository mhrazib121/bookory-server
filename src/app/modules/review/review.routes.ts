import express from "express";
import { ReviewController } from "./review.controller";
const router = express.Router();

router.patch("/:id", ReviewController.addReview);

export const ReviewRoutes = router;
