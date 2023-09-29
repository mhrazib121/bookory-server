import { Schema, model } from "mongoose";
import { IWishlist, WishlistModel } from "./wishlist.interface";
import { bookSchema } from "../book/book.model";
// import { IWhitelist, WhitelistModel } from "./whitelist.interface";
// import { bookSchema } from "../book/book.model";

const wishlistSchema = new Schema<IWishlist, WishlistModel>(
  {
    email: {
      type: String,
      required: true,
    },
    data: {
      type: [bookSchema],
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Wishlist = model<IWishlist, WishlistModel>(
  "Wishlist",
  wishlistSchema
);
