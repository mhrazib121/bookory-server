import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync, sendResponse } from "../../../utils";
import { ReviewServices } from "./review.services";

const addReview = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const reviewData = req.body;
    const id = req.params.id;
    console.log(reviewData);
    const data = await ReviewServices.addReview(id, reviewData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Review posted successfully",
      data: data,
    });
    next();
  }
);

export const ReviewController = {
  addReview,
};
