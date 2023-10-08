"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const errors_1 = require("../../../errors");
const wishlist_model_1 = require("./wishlist.model");
const addWishlist = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isUserMakeWhitelist = yield wishlist_model_1.Wishlist.findOne({ email: payload.email });
    if (!isUserMakeWhitelist) {
        const addToDoc = yield wishlist_model_1.Wishlist.create(payload);
        return addToDoc;
    }
    else {
        isUserMakeWhitelist === null || isUserMakeWhitelist === void 0 ? void 0 : isUserMakeWhitelist.data.push(payload.data);
        isUserMakeWhitelist.save();
        return isUserMakeWhitelist;
    }
});
const removeWishBook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const specificUserWishlist = yield wishlist_model_1.Wishlist.findOne({ email: payload.email });
    if (specificUserWishlist) {
        const remainingBooksInList = specificUserWishlist.data.filter(book => book.title !== payload.data.title);
        specificUserWishlist.data = remainingBooksInList;
        const result = yield specificUserWishlist.save();
        return result;
    }
});
const getWishlist = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield wishlist_model_1.Wishlist.find();
});
const getSingleWishlist = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, id } = query;
    const specificUserWishlist = yield wishlist_model_1.Wishlist.findOne({ email: email });
    if (specificUserWishlist) {
        const findTheBook = specificUserWishlist.data.find(book => book._id == id);
        if (findTheBook) {
            return findTheBook;
        }
        else {
            throw new errors_1.ApiError(http_status_1.default.NOT_FOUND, "This Book is not found");
        }
    }
    else {
        throw new errors_1.ApiError(http_status_1.default.NOT_FOUND, "This User's wishlist does not found");
    }
});
const updateReadingStatus = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const specificUserWishlist = yield wishlist_model_1.Wishlist.findOne({ email: payload.email });
    if (specificUserWishlist) {
        const findTheBook = specificUserWishlist.data.find(book => book._id == id);
        if (findTheBook) {
            findTheBook.readingStatus = payload.status;
        }
        const result = yield specificUserWishlist.save();
        return result;
    }
});
exports.WishlistServices = {
    addWishlist,
    removeWishBook,
    getWishlist,
    getSingleWishlist,
    updateReadingStatus,
};
