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
exports.OrdersController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const utils_1 = require("../../../utils");
const orders_services_1 = require("./orders.services");
const createOrders = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = req.body;
        const result = yield orders_services_1.OrdersServices.createOrders(order);
        (0, utils_1.sendResponse)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Order create successfully !",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getAllOrders = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield orders_services_1.OrdersServices.getAllOrders();
        (0, utils_1.sendResponse)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Orders retrieved successfully !",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getSingleOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield orders_services_1.OrdersServices.getSingleOrder(id);
        (0, utils_1.sendResponse)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Order retrieved successfully !",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.OrdersController = {
    createOrders,
    getAllOrders,
    getSingleOrder,
};
