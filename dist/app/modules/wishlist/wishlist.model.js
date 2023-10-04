"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wishlist = void 0;
const mongoose_1 = require("mongoose");
const book_model_1 = require("../book/book.model");
// import { IWhitelist, WhitelistModel } from "./whitelist.interface";
// import { bookSchema } from "../book/book.model";
const wishlistSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
    },
    data: {
        type: [book_model_1.bookSchema],
        required: true,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Wishlist = (0, mongoose_1.model)("Wishlist", wishlistSchema);
