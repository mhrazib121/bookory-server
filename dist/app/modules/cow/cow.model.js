"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cow = void 0;
const mongoose_1 = require("mongoose");
const cow_constans_1 = require("./cow.constans");
const cowSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
        enum: cow_constans_1.CowLocation,
    },
    breed: {
        type: String,
        required: true,
        enum: cow_constans_1.CowBreed,
    },
    weight: {
        type: Number,
        required: true,
    },
    label: {
        type: String,
        required: true,
        enum: cow_constans_1.CowLabel,
    },
    category: {
        type: String,
        required: true,
        enum: cow_constans_1.CowCategory,
    },
    seller: {
        type: mongoose_1.Types.ObjectId,
        required: true,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Cow = (0, mongoose_1.model)("Cow", cowSchema);
