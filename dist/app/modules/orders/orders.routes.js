"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const orders_controller_1 = require("./orders.controller");
const router = express_1.default.Router();
router.post("/", (0, auth_1.default)(user_1.ENUM_USER_ROLE.BUYER), orders_controller_1.OrdersController.createOrders);
router.get("/", orders_controller_1.OrdersController.getAllOrders);
router.get("/:id", orders_controller_1.OrdersController.getSingleOrder);
exports.OrdersRoutes = router;
