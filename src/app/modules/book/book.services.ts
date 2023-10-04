import { searchableFields } from "./book.constant";
import { IBook, IBookQuery } from "./book.interface";
import { Book } from "./book.model";

const addBook = async (payload: IBook) => {
  const addedBook = await Book.create(payload);
  return addedBook;
};
const getBooks = async (query: IBookQuery) => {
  const { searchText, ...filterableData } = query;
  const andConditions = [];

  if (searchText) {
    andConditions.push({
      $or: searchableFields.map(field => ({
        [field]: {
          $regex: searchText, // $regex for partial search
          $options: "i", // $option for text insensitive
        },
      })),
    });
  }
  /*
    console.log("entties", Object.entries(filterableData));
    [ ["field", "value"], ["genre", "Educatuion"], ];
*/

  if (Object.keys(filterableData).length) {
    andConditions.push({
      $and: Object.entries(filterableData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const whereCondition =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Book.find(whereCondition);

  return result;
};
const getOneBook = async (id: string) => {
  const addedBook = await Book.findById(id);
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
  getBooks,
  getOneBook,
};
