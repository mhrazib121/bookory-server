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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookServices = void 0;
const book_constant_1 = require("./book.constant");
const book_model_1 = require("./book.model");
const addBook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const addedBook = yield book_model_1.Book.create(payload);
    return addedBook;
});
const getBooks = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchText } = query, filterableData = __rest(query, ["searchText"]);
    const andConditions = [];
    if (searchText) {
        andConditions.push({
            $or: book_constant_1.searchableFields.map(field => ({
                [field]: {
                    $regex: searchText,
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
    const whereCondition = andConditions.length > 0 ? { $and: andConditions } : {};
    const result = yield book_model_1.Book.find(whereCondition);
    return result;
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
