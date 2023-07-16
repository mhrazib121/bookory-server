import { IBook } from "./book.interface";
import { Book } from "./book.model";

const addBook = async (payload: IBook) => {
  const addedBook = await Book.create(payload);
  return addedBook;
};

export const BookServices = {
  addBook,
};
