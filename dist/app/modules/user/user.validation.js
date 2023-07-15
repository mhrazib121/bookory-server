"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const createUserZodSchema = zod_1.z.object({
  body: zod_1.z.object({
    email: zod_1.z.string(),
    role: zod_1.z.enum(["seller", "buyer"]),
    password: zod_1.z.string().optional(),
    name: zod_1.z.object({
      firstName: zod_1.z.string(),
      lastName: zod_1.z.string(),
    }),
    address: zod_1.z.string(),
    budget: zod_1.z.number().optional(),
    income: zod_1.z.number().optional(),
  }),
});
exports.UserValidation = {
  createUserZodSchema,
};
