"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = exports.bookSchema = void 0;
const mongoose_1 = require("mongoose");
exports.bookSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    publicationDate: {
        type: String,
        required: true,
    },
    readingStatus: {
        type: String,
        required: false,
    },
    reviews: [
        {
            email: String,
            name: String,
            message: String,
        },
    ],
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Book = (0, mongoose_1.model)("Book", exports.bookSchema);
