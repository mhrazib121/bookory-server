import { IAddReview } from "../../../interfaces";
import { Book } from "../book/book.model";

const addReview = async (id: string, payload: IAddReview) => {
  const findBook = await Book.findOne({ _id: id });
  if (!findBook) {
    throw new Error("Book not found");
  }

  findBook?.reviews.push(payload);
  await findBook.save();

  console.log(findBook);
  return findBook;
};

export const ReviewServices = {
  addReview,
};
