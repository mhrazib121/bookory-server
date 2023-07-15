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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CowServices = void 0;
const helpers_1 = require("../../../helpers");
const user_model_1 = require("../user/user.model");
const cow_constans_1 = require("./cow.constans");
const cow_model_1 = require("./cow.model");
const createCow = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const seller = yield user_model_1.User.findById(payload.seller);
    if (!seller) {
        throw new Error("Seller not found! (Gorur malik re khuje paoa jacce na!)");
    }
    const createdCow = yield cow_model_1.Cow.create(payload);
    return createdCow;
});
const getAllCows = (filters, paginationOption) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = filters || {}, { searchTerm, location, minPrice, maxPrice } = _a, filtersData = __rest(_a, ["searchTerm", "location", "minPrice", "maxPrice"]);
    const andCondition = [];
    if (Object.keys(filtersData).length) {
        andCondition.push({
            $and: Object.entries(filtersData).map(([field, value]) => ({
                [field]: value,
            })),
        });
    }
    if (searchTerm) {
        andCondition.push({
            $or: cow_constans_1.cowsSearchFields.map(field => ({
                [field]: {
                    $regex: searchTerm,
                    $options: "i",
                },
            })),
        });
    }
    if (location) {
        andCondition.push({
            location: {
                $regex: location,
                $options: "i",
            },
        });
    }
    if (minPrice) {
        andCondition.push({
            price: { $gte: minPrice },
        });
    }
    if (maxPrice) {
        andCondition.push({
            price: { $lte: maxPrice },
        });
    }
    const { limit, page, skip, sortBy, sortOrder } = (0, helpers_1.calculatePagination)(paginationOption);
    const sortConditions = {};
    if (sortBy && sortOrder) {
        sortConditions[sortBy] = sortOrder;
    }
    const whereConditions = andCondition.length > 0 ? { $and: andCondition } : {};
    const result = yield cow_model_1.Cow.find(whereConditions)
        .sort(sortConditions)
        .skip(skip)
        .limit(limit);
    const total = yield cow_model_1.Cow.countDocuments();
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
const updateCowDetails = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedCow = yield cow_model_1.Cow.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return updatedCow;
});
const deleteCow = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cow_model_1.Cow.findByIdAndDelete(id);
    return result;
});
const getOneCow = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cow_model_1.Cow.findById(id);
    return result;
});
exports.CowServices = {
    getAllCows,
    createCow,
    updateCowDetails,
    deleteCow,
    getOneCow,
};
