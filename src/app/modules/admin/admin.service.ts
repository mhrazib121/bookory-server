import httpStatus from "http-status";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import config from "../../../config";
import { ApiError } from "../../../errors";
import { ILoginUser, IRefreshTokenResponse } from "../auth/auth.interface";
import { IAdmin } from "./admin.interface";
import { Admin } from "./admin.model";

const createAdmin = async (user: IAdmin): Promise<IAdmin | null> => {
  if (!user.password) {
    user.password = config.admin_pass as string;
  }

  // set role
  user.role = "admin";
  const create = await Admin.create(user);

  return create;
};

const adminLogin = async (payload: ILoginUser) => {
  const { phoneNumber, password } = payload;
  const isExistUser = await Admin.isUserExist(phoneNumber);
  if (!isExistUser) {
    throw new ApiError(httpStatus.NOT_FOUND, "This Admin does not found");
  }

  const isPasswordMatched = await Admin.isPasswordMatched(
    password,
    isExistUser.password
  );

  if (!isPasswordMatched) {
    throw new Error("Password does't matched");
  }

  const { email: userPhoneNumber, role } = isExistUser;

  const accessToken = jwt.sign(
    { userPhoneNumber, role },
    config.access_secret as Secret,
    { expiresIn: config.access_expire_time }
  );

  const refreshToken = jwt.sign(
    { userPhoneNumber, role },
    config.refresh_token_secret as Secret,
    { expiresIn: config.refresh_token_expire_time }
  );

  return {
    accessToken,
    refreshToken,
  };
};

const refreshToken = async (token: string): Promise<IRefreshTokenResponse> => {
  let verifiedToken = null;
  try {
    verifiedToken = jwt.verify(
      token,
      config.refresh_token_secret as Secret
    ) as JwtPayload;
  } catch (err) {
    throw new ApiError(httpStatus.FORBIDDEN, "Invalid Refresh Token");
  }

  const { userPhoneNumber } = verifiedToken;

  console.log({ userPhoneNumber });

  const isUserExist = await Admin.isUserExist(userPhoneNumber);
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "Admin does not exist");
  }
  //generate new token

  const newAccessToken = jwt.sign(
    { email: isUserExist.phoneNumber, role: isUserExist.role },
    config.access_secret as Secret,
    { expiresIn: config.access_expire_time }
  );

  return {
    accessToken: newAccessToken,
  };
};

export const AdminServices = {
  createAdmin,
  adminLogin,
  refreshToken,
};
