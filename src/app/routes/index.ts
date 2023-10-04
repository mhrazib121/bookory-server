import express from "express";

import { UserRoutes } from "../modules/user/user.routes";

import { AuthRoutes } from "../modules/auth/auth.routes";
import { BookRoutes } from "../modules/book/book.routes";
import { WishlistRoutes } from "../modules/wishlist/wishlist.router";

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
    path: "/books",
    route: BookRoutes,
  },
  {
    path: "/wishlist",
    route: WishlistRoutes,
  },
];

modules.forEach(route => router.use(route.path, route.route));

export default router;
