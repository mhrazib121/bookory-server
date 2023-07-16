import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { BookValidation } from "./book.validation";
import { BookController } from "./book.controller";

const router = express.Router();

router.post(
  "/add-book",
  validateRequest(BookValidation.addBookZodSchema),
  BookController.addBook
);
router.patch("/:id", BookController.editBook);
router.delete("/:id", BookController.deleteBook);

export const BookRoutes = router;