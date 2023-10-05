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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewServices = void 0;
const book_model_1 = require("../book/book.model");
const addReview = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const findBook = yield book_model_1.Book.findOne({ _id: id });
    if (!findBook) {
        throw new Error("Book not found");
    }
    findBook === null || findBook === void 0 ? void 0 : findBook.reviews.push(payload);
    yield findBook.save();
    console.log(findBook);
    return findBook;
});
exports.ReviewServices = {
    addReview,
};
