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
exports.AuthServices = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../../config"));
const errors_1 = require("../../../errors");
const user_model_1 = require("../user/user.model");
const http_status_1 = __importDefault(require("http-status"));
const userSignUp = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const createdUser = yield user_model_1.User.create(user);
    return createdUser;
});
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    const isExistUser = yield user_model_1.User.isUserExist(email);
    if (!isExistUser) {
        throw new errors_1.ApiError(http_status_1.default.NOT_FOUND, "User does not found");
    }
    const isPasswordMatched = yield user_model_1.User.isPasswordMatched(password, isExistUser.password);
    if (!isPasswordMatched) {
        throw new Error("Password does't matched");
    }
    const { email: userEmail } = isExistUser;
    const accessToken = jsonwebtoken_1.default.sign({ userEmail }, config_1.default.access_secret, {
        expiresIn: config_1.default.access_expire_time,
    });
    const refreshToken = jsonwebtoken_1.default.sign({ userEmail }, config_1.default.refresh_token_secret, { expiresIn: config_1.default.refresh_token_expire_time });
    return {
        accessToken,
        refreshToken,
    };
});
const refreshToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    let verifiedToken = null;
    try {
        verifiedToken = jsonwebtoken_1.default.verify(token, config_1.default.refresh_token_secret);
    }
    catch (err) {
        throw new errors_1.ApiError(http_status_1.default.FORBIDDEN, "Invalid Refresh Token");
    }
    const { userEmail } = verifiedToken;
    const isUserExist = yield user_model_1.User.isUserExist(userEmail);
    if (!isUserExist) {
        throw new errors_1.ApiError(http_status_1.default.NOT_FOUND, "User does not exist");
    }
    //generate new token
    const newAccessToken = jsonwebtoken_1.default.sign({ email: isUserExist.email }, config_1.default.access_secret, { expiresIn: config_1.default.access_expire_time });
    return {
        accessToken: newAccessToken,
    };
});
exports.AuthServices = {
    userSignUp,
    loginUser,
    refreshToken,
};
