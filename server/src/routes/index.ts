import { Router } from "express";
import userRoutes from "./user.route";
import productRoutes from "./product.route";

const routes = Router();

routes.use("/api/users", userRoutes);
routes.use("/api/products", productRoutes);

export default routes;
