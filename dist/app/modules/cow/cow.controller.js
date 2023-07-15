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
exports.CowController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const utils_1 = require("../../../utils");
const pagination_1 = require("../../constants/pagination");
const cow_constans_1 = require("./cow.constans");
const cow_services_1 = require("./cow.services");
const createCow = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cow = req.body;
        const result = yield cow_services_1.CowServices.createCow(cow);
        (0, utils_1.sendResponse)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "cow create successfully !",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getAllCows = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filters = (0, utils_1.pick)(req.query, cow_constans_1.cowsFilterFields);
        const paginationOptions = (0, utils_1.pick)(req.query, pagination_1.paginationFields);
        const result = yield cow_services_1.CowServices.getAllCows(filters, paginationOptions);
        (0, utils_1.sendResponse)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Cows retrieved successfully !",
            meta: result.meta,
            data: result.data,
        });
    }
    catch (error) {
        next(error);
    }
});
const updateCowDetails = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const id = req.params.id;
        const result = yield cow_services_1.CowServices.updateCowDetails(id, data);
        (0, utils_1.sendResponse)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: " Updated successfully !",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const deleteCow = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield cow_services_1.CowServices.deleteCow(id);
        (0, utils_1.sendResponse)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Successfully delete the cow details!",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getOneCow = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // console.log("req.user", req.user);
        const id = req.params.id;
        const result = yield cow_services_1.CowServices.getOneCow(id);
        if (result) {
            (0, utils_1.sendResponse)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "find the cow details!",
                data: result,
            });
        }
        else {
            (0, utils_1.sendResponse)(res, {
                statusCode: http_status_1.default.BAD_REQUEST,
                success: false,
                message: "Data not found!",
                data: result,
            });
        }
    }
    catch (error) {
        next(error);
    }
});
exports.CowController = {
    createCow,
    getAllCows,
    updateCowDetails,
    deleteCow,
    getOneCow,
};
