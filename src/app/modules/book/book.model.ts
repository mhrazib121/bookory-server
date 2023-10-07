import { Schema, model } from "mongoose";
import { BookModel, IBook } from "./book.interface";

export const bookSchema = new Schema<IBook, BookModel>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    publicationDate: {
      type: String,
      required: true,
    },
    readingStatus: {
      type: String,
      required: false,
    },
    reviews: [
      {
        email: String,
        name: String,
        message: String,
      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Book = model<IBook, BookModel>("Book", bookSchema);
