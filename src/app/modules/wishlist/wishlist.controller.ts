import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync, sendResponse } from "../../../utils";
import { WishlistServices } from "./wishlist.services";

const addWishBook = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const wishlistData = req.body;
    const data = await WishlistServices.addWishlist(wishlistData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Book added to whitelist successfully",
      data: data,
    });
    next();
  }
);
const removeWishBook = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const wishlistData = req.body;
    const data = await WishlistServices.removeWishBook(wishlistData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Book removed from whitelist successfully",
      data: data,
    });
    next();
  }
);
const getSingleWishlist = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = await WishlistServices.getSingleWishlist(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Whitelist retrieve successfully",
      data: data,
    });
    next();
  }
);
const getWishlist = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = await WishlistServices.getWishlist();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Whitelist retrieve successfully",
      data: data,
    });
    next();
  }
);
const updateReadingStatus = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const updateData = req.body;
    const id = req.params.id;
    console.log("9d", id);
    const data = await WishlistServices.updateReadingStatus(id, updateData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Book removed from whitelist successfully",
      data: data,
    });
    next();
  }
);

export const WishlistController = {
  addWishBook,
  removeWishBook,
  getWishlist,
  getSingleWishlist,
  updateReadingStatus,
};
