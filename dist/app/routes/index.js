"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cow_routes_1 = require("../modules/cow/cow.routes");
const orders_routes_1 = require("../modules/orders/orders.routes");
const user_routes_1 = require("../modules/user/user.routes");
const admin_routes_1 = require("../modules/admin/admin.routes");
const auth_routes_1 = require("../modules/auth/auth.routes");
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
        path: "/cows",
        route: cow_routes_1.CowRoutes,
    },
    {
        path: "/orders",
        route: orders_routes_1.OrdersRoutes,
    },
    {
        path: "/admins",
        route: admin_routes_1.AdminRoutes,
    },
];
modules.forEach(route => router.use(route.path, route.route));
exports.default = router;
