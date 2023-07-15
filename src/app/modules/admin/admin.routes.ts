import express from "express";
import { AdminController } from "./admin.controller";
import validateRequest from "../../middlewares/validateRequest";
import { AuthValidation } from "../auth/auth.validation";

const router = express.Router();

router.post("/create-admin", AdminController.createAdmin);
router.post("/login", AdminController.adminLogin);
router.post(
  "/refresh-token",
  validateRequest(AuthValidation.refreshTokenZodSchema),
  AdminController.refreshToken
);

export const AdminRoutes = router;
