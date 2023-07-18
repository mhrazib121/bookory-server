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
exports.BookServices = void 0;
const book_model_1 = require("./book.model");
const addBook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const addedBook = yield book_model_1.Book.create(payload);
    return addedBook;
});
const getBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const addedBook = yield book_model_1.Book.find();
    return addedBook;
});
const getOneBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const addedBook = yield book_model_1.Book.findById(id);
    return addedBook;
});
const editBook = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const addedBook = yield book_model_1.Book.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });
    return addedBook;
});
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const addedBook = yield book_model_1.Book.findOneAndDelete({ _id: id });
    return addedBook;
});
exports.BookServices = {
    addBook,
    editBook,
    deleteBook,
    getBooks,
    getOneBook,
};
