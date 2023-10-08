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
exports.WishlistController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const utils_1 = require("../../../utils");
const wishlist_services_1 = require("./wishlist.services");
const addWishBook = (0, utils_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const wishlistData = req.body;
    const data = yield wishlist_services_1.WishlistServices.addWishlist(wishlistData);
    (0, utils_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Book added to whitelist successfully",
        data: data,
    });
    next();
}));
const removeWishBook = (0, utils_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const wishlistData = req.body;
    const data = yield wishlist_services_1.WishlistServices.removeWishBook(wishlistData);
    (0, utils_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Book removed from whitelist successfully",
        data: data,
    });
    next();
}));
const getSingleWishlist = (0, utils_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield wishlist_services_1.WishlistServices.getSingleWishlist(req.query);
    (0, utils_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Whitelist retrieve successfully",
        data: data,
    });
    next();
}));
const getWishlist = (0, utils_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield wishlist_services_1.WishlistServices.getWishlist();
    (0, utils_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Whitelist retrieve successfully",
        data: data,
    });
    next();
}));
const updateReadingStatus = (0, utils_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const updateData = req.body;
    const id = req.params.id;
    console.log("9d", id);
    const data = yield wishlist_services_1.WishlistServices.updateReadingStatus(id, updateData);
    (0, utils_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Book removed from whitelist successfully",
        data: data,
    });
    next();
}));
exports.WishlistController = {
    addWishBook,
    removeWishBook,
    getWishlist,
    getSingleWishlist,
    updateReadingStatus,
};
