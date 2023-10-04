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
exports.BookController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const utils_1 = require("../../../utils");
const book_services_1 = require("./book.services");
const addBook = (0, utils_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const book = req.body;
    const result = yield book_services_1.BookServices.addBook(book);
    (0, utils_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Book added successfully",
        data: result,
    });
    next();
}));
const getBooks = (0, utils_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.query);
    const result = yield book_services_1.BookServices.getBooks(req.query);
    (0, utils_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Book  List",
        data: result,
    });
    next();
}));
const getOneBook = (0, utils_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield book_services_1.BookServices.getOneBook(id);
    (0, utils_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Get one Book",
        data: result,
    });
    next();
}));
const editBook = (0, utils_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = req.body;
    const result = yield book_services_1.BookServices.editBook(id, data);
    (0, utils_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Book updated successfully",
        data: result,
    });
    next();
}));
const deleteBook = (0, utils_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield book_services_1.BookServices.deleteBook(id);
    (0, utils_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Book deleted successfully",
        data: result,
    });
    next();
}));
exports.BookController = {
    addBook,
    getBooks,
    getOneBook,
    editBook,
    deleteBook,
};
