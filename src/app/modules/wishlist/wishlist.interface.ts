import { Model } from "mongoose";
import { IBook } from "../book/book.interface";

export type IWishlist = {
  email: string;
  data: [IBook];
};

export type WishlistModel = Model<IWishlist>;
