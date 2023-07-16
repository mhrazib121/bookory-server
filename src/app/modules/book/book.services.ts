import { IBook } from "./book.interface";
import { Book } from "./book.model";

const addBook = async (payload: IBook) => {
  const addedBook = await Book.create(payload);
  return addedBook;
};
const editBook = async (id: string, data: Partial<IBook>) => {
  const addedBook = await Book.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return addedBook;
};
const deleteBook = async (id: string) => {
  const addedBook = await Book.findOneAndDelete({ _id: id });
  return addedBook;
};

export const BookServices = {
  addBook,
  editBook,
  deleteBook,
};