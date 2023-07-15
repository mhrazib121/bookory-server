/* eslint-disable no-unused-vars */
import { Model } from "mongoose";

// type IUserRole = "seller" | "buyer";

export type IAdmin = {
  email: string;
  role: "admin";
  password: string;
  name: {
    firstName: string;
    lastName: string;
  };
  address: string;
};
export type AdminModel = {
  isUserExist(id: string): Promise<Pick<IAdmin, "email" | "password" | "role">>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
} & Model<IAdmin>;
