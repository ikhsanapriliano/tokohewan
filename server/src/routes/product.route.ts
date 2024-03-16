import { Router } from "express";
import { getProducts } from "../controllers/product.controller";
import { authenticate } from "../middlewares/auth.middleware";

const productRoutes = Router();

productRoutes.use(authenticate);

productRoutes.get("/", getProducts);
productRoutes.get("/:id");
productRoutes.post("/");
productRoutes.put("/:id");
productRoutes.delete("/:id");

export default productRoutes;
