import { Model } from "mongoose";

export type IBook = {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  email: string;
  imgUrl: string;
  readingStatus?: string;
  reviews: [
    {
      name?: string;
      email?: string;
      message?: string;
    }
  ];
};

export type IBookQuery = {
  searchText?: string;
  genre?: string;
  publicationDate?: string;
};

export type BookModel = Model<IBook>;
