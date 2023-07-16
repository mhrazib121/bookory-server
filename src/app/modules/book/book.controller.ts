import { NextFunction, Request, Response } from "express";
import { catchAsync, sendResponse } from "../../../utils";
import { BookServices } from "./book.services";
import httpStatus from "http-status";

const addBook = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const book = req.body;
    const result = await BookServices.addBook(book);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Book added successfully",
      data: result,
    });
    next();
  }
);
const editBook = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const data = req.body;
    const result = await BookServices.editBook(id, data);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Book updated successfully",
      data: result,
    });
    next();
  }
);

export const BookController = {
  addBook,
  editBook,
};
