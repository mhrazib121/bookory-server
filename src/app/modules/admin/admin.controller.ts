import { Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync, sendResponse } from "../../../utils";
import {
  ILoginUserResponse,
  IRefreshTokenResponse,
} from "../auth/auth.interface";
import { IAdmin } from "./admin.interface";
import { AdminServices } from "./admin.service";
import config from "../../../config";

const createAdmin = catchAsync(async (req: Request, res: Response) => {
  const admin = req.body;
  const result = await AdminServices.createAdmin(admin);

  sendResponse<IAdmin>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin created successfully!",
    data: result,
  });
});

const adminLogin = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body;
  const result = await AdminServices.adminLogin(loginData);

  const { refreshToken, ...others } = result;

  const cookiesOption = {
    secure: config.env === "production" ? true : false,
    httpOnly: true,
  };

  res.cookie("refreshToken", refreshToken, cookiesOption);

  sendResponse<ILoginUserResponse>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin login successfully!",
    data: others,
  });
});

const refreshToken = catchAsync(async (req: Request, res: Response) => {
  const { refreshToken } = req.cookies;

  const result = await AdminServices.refreshToken(refreshToken);

  // set refresh token into cookie
  const cookieOptions = {
    secure: config.env === "production",
    httpOnly: true,
  };

  res.cookie("refreshToken", refreshToken, cookieOptions);

  sendResponse<IRefreshTokenResponse>(res, {
    statusCode: 200,
    success: true,
    message: "New access token generated successfully !",
    data: result,
  });
});

export const AdminController = {
  createAdmin,
  adminLogin,
  refreshToken,
};
