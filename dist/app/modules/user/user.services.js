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
exports.UserServices = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("./user.model");
// interface Idecode {
//   useremail: string;
//   role: string;
// }
const createUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const createdUser = yield user_model_1.User.create(payload);
    return createdUser;
});
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.find();
    return result;
});
const updateUserDetails = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedCow = yield user_model_1.User.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return updatedCow;
});
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findByIdAndDelete(id);
    return result;
});
const getOneUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findById(id);
    return result;
});
const getMyProfile = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const decodedToken = jsonwebtoken_1.default.decode(token);
    const { userEmail } = decodedToken;
    const getProfile = yield user_model_1.User.findOne({ email: userEmail });
    return {
        getProfile,
    };
});
const updateProfile = (token, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const decodedToken = jsonwebtoken_1.default.decode(token);
    const { userPhoneNumber } = decodedToken;
    const updatedProfile = yield user_model_1.User.findOneAndUpdate({ email: userPhoneNumber }, payload, {
        new: true,
    });
    return {
        updatedProfile,
    };
});
exports.UserServices = {
    createUser,
    getAllUsers,
    getOneUser,
    updateUserDetails,
    deleteUser,
    getMyProfile,
    updateProfile,
};
