"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("../modules/user/user.routes");
const auth_routes_1 = require("../modules/auth/auth.routes");
const book_routes_1 = require("../modules/book/book.routes");
const wishlist_router_1 = require("../modules/wishlist/wishlist.router");
const review_routes_1 = require("../modules/review/review.routes");
const router = express_1.default.Router();
const modules = [
    {
        path: "/auth",
        route: auth_routes_1.AuthRoutes,
    },
    {
        path: "/users",
        route: user_routes_1.UserRoutes,
    },
    {
        path: "/books",
        route: book_routes_1.BookRoutes,
    },
    {
        path: "/wishlist",
        route: wishlist_router_1.WishlistRoutes,
    },
    {
        path: "/review",
        route: review_routes_1.ReviewRoutes,
    },
];
modules.forEach(route => router.use(route.path, route.route));
exports.default = router;
