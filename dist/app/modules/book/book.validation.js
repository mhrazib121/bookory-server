"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookValidation = void 0;
const zod_1 = require("zod");
const addBookZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title is required",
        }),
        author: zod_1.z.string({
            required_error: "Author name is required",
        }),
        genre: zod_1.z.string({
            required_error: "Genre is required",
        }),
        publicationDate: zod_1.z.date({
            required_error: "Publication Date is required",
        }),
    }),
});
exports.BookValidation = {
    addBookZodSchema,
};
