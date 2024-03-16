import { Router } from "express";
import { getProductById, getProducts } from "../controllers/product.controller";
import { authenticate } from "../middlewares/auth.middleware";

const productRoutes = Router();

productRoutes.use(authenticate);

productRoutes.get("/", getProducts);
productRoutes.get("/:id", getProductById);
productRoutes.post("/");
productRoutes.put("/:id");
productRoutes.delete("/:id");

export default productRoutes;
