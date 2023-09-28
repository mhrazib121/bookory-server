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
exports.UserController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const utils_1 = require("../../../utils");
const user_services_1 = require("./user.services");
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const result = yield user_services_1.UserServices.createUser(user);
        (0, utils_1.sendResponse)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "User create successfully !",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_services_1.UserServices.getAllUsers();
        (0, utils_1.sendResponse)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Users retrieved successfully !",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const updateUserDetails = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const id = req.params.id;
        const result = yield user_services_1.UserServices.updateUserDetails(id, data);
        (0, utils_1.sendResponse)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "User updated successfully!",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield user_services_1.UserServices.deleteUser(id);
        (0, utils_1.sendResponse)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Users deleted successfully!",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getOneUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield user_services_1.UserServices.getOneUser(id);
        if (result) {
            (0, utils_1.sendResponse)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "User retrieved successfully!",
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
const getMyProfile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.headers.authorization;
        const result = yield user_services_1.UserServices.getMyProfile(token);
        (0, utils_1.sendResponse)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Get profile retrieved successfully!",
            data: result.getProfile,
        });
    }
    catch (error) {
        next(error);
    }
});
const updateProfile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.headers.authorization;
        const data = req.body;
        const result = yield user_services_1.UserServices.updateProfile(token, data);
        (0, utils_1.sendResponse)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "profile updated successfully!",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.UserController = {
    createUser,
    getAllUsers,
    updateUserDetails,
    getOneUser,
    deleteUser,
    getMyProfile,
    updateProfile,
};
