import { IBook } from "../book/book.interface";
import { Wishlist } from "./wishlist.model";

type IPayload = {
  email: string;
  data: IBook;
};

type IUpdateReadingStatus = {
  email: string;
  status: string;
};

const addWishlist = async (payload: IPayload) => {
  const isUserMakeWhitelist = await Wishlist.findOne({ email: payload.email });
  if (!isUserMakeWhitelist) {
    const addToDoc = await Wishlist.create(payload);
    return addToDoc;
  } else {
    isUserMakeWhitelist?.data.push(payload.data);
    isUserMakeWhitelist.save();
    return isUserMakeWhitelist;
  }
};
const removeWishBook = async (payload: IPayload) => {
  const specificUserWishlist = await Wishlist.findOne({ email: payload.email });
  if (specificUserWishlist) {
    const remainingBooksInList = specificUserWishlist.data.filter(
      book => book.title !== payload.data.title
    );
    specificUserWishlist.data = remainingBooksInList;
    const result = await specificUserWishlist.save();
    return result;
  }
};
const getWishlist = async () => {
  return await Wishlist.find();
};

const updateReadingStatus = async (
  id: string,
  payload: IUpdateReadingStatus
) => {
  const specificUserWishlist = await Wishlist.findOne({ email: payload.email });
  if (specificUserWishlist) {
    const findTheBook = specificUserWishlist.data.find(book => book._id == id);
    if (findTheBook) {
      findTheBook.readingStatus = payload.status;
    }
    const result = await specificUserWishlist.save();
    return result;
  }
};
export const WishlistServices = {
  addWishlist,
  removeWishBook,
  getWishlist,
  updateReadingStatus,
};
