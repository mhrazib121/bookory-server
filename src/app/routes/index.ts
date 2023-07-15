import express from "express";
import { CowRoutes } from "../modules/cow/cow.routes";
import { OrdersRoutes } from "../modules/orders/orders.routes";
import { UserRoutes } from "../modules/user/user.routes";
import { AdminRoutes } from "../modules/admin/admin.routes";
import { AuthRoutes } from "../modules/auth/auth.routes";

const router = express.Router();

const modules = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/cows",
    route: CowRoutes,
  },
  {
    path: "/orders",
    route: OrdersRoutes,
  },
  {
    path: "/admins",
    route: AdminRoutes,
  },
];

modules.forEach(route => router.use(route.path, route.route));

export default router;
