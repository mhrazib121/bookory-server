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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersServices = void 0;
const cow_model_1 = require("../cow/cow.model");
const user_model_1 = require("../user/user.model");
const orders_model_1 = require("./orders.model");
const createOrders = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const buyer = yield user_model_1.User.findById(payload.buyer);
    const cow = yield cow_model_1.Cow.findById(payload.cow);
    if (buyer && cow) {
        if (cow.label === "for sale") {
            const seller = yield user_model_1.User.findById(cow.seller);
            if (seller) {
                const budget = buyer.budget;
                const price = cow.price;
                const income = seller.income;
                if (budget >= price) {
                    yield cow_model_1.Cow.findOneAndUpdate({ _id: cow === null || cow === void 0 ? void 0 : cow._id }, {
                        label: "sold out",
                    }, {
                        new: true,
                    });
                    yield user_model_1.User.findOneAndUpdate({ _id: buyer === null || buyer === void 0 ? void 0 : buyer._id }, {
                        budget: budget - price,
                    }, {
                        new: true,
                    });
                    yield user_model_1.User.findOneAndUpdate({ _id: seller._id }, {
                        income: income + price,
                    }, {
                        new: true,
                    });
                }
                else {
                    throw new Error(`Insuficent balance,,, Your budget is ${budget} But cow price is ${price}`);
                }
            }
            else {
                throw new Error("Seller is not found");
            }
        }
        else {
            throw new Error("sold out! ");
        }
    }
    else {
        throw new Error("Invalid buyer Id and seller Id");
    }
    const createdUser = yield orders_model_1.Order.create(payload);
    return createdUser;
});
const getAllOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield orders_model_1.Order.find();
    return result;
});
const getSingleOrder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield orders_model_1.Order.findById(id).populate("buyer");
    return result;
});
exports.OrdersServices = {
    createOrders,
    getAllOrders,
    getSingleOrder,
};
