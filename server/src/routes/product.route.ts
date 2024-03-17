import { Router } from "express";
import {
    addProduct,
    deleteProduct,
    editProduct,
    getProductById,
    getProducts
} from "../controllers/product.controller";
import { authenticate } from "../middlewares/auth.middleware";

const productRoutes = Router();

productRoutes.use(authenticate);

productRoutes.get("/", getProducts);
productRoutes.get("/:id", getProductById);
productRoutes.post("/", addProduct);
productRoutes.put("/:id", editProduct);
productRoutes.delete("/:id", deleteProduct);

export default productRoutes;
