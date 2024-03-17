import { type Request, type Response, type NextFunction } from "express";
import {
    type SearchProduct,
    type Utility,
    type Habitat
} from "../types/product.type";
import {
    createProduct,
    findAllProducts,
    findProductById,
    findProductsByCategory,
    updateProduct
} from "../services/product.service";
import {
    getProductsValidation,
    getProductByIdValidation,
    addProductValidation,
    editProductValidation
} from "../validations/product.validation";

export const getProducts = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const query = req.query;
        const { error } = getProductsValidation(query);
        if (error != undefined) {
            return res.status(400).json({
                error: error.details[0].message,
                message: "Ambil data"
            });
        }
        let data;
        if (
            query.class === undefined &&
            query.utility === undefined &&
            query.habitat === undefined
        ) {
            data = await findAllProducts();
        } else {
            if (
                query.class == "" &&
                query.utility == "" &&
                query.habitat == ""
            ) {
                return res.status(400).json({
                    error: "400 Bad Request",
                    message: "Oops something wrong"
                });
            }

            const searchProduct: SearchProduct = {
                class: "",
                utility: {
                    peliharaan: false,
                    peternakan: false,
                    militer: false,
                    hewan_kurban: false,
                    material: false
                },
                habitat: {
                    darat: false,
                    air: false,
                    udara: false
                }
            };

            searchProduct.class = String(query.class);

            if (searchProduct.utility != undefined) {
                switch (query.utility) {
                    case "peliharaan":
                        searchProduct.utility.peliharaan = true;
                        break;
                    case "peternakan":
                        searchProduct.utility.peternakan = true;
                        break;
                    case "militer":
                        searchProduct.utility.militer = true;
                        break;
                    case "hewan_kurban":
                        searchProduct.utility.hewan_kurban = true;
                        break;
                    case "material":
                        searchProduct.utility.material = true;
                        break;
                    default:
                        delete searchProduct.utility;
                        break;
                }
                for (const key in searchProduct.utility) {
                    if (searchProduct.utility[key as keyof Utility] == false) {
                        delete searchProduct.utility[key as keyof Utility];
                    }
                }
            }

            if (searchProduct.habitat != undefined) {
                switch (query.habitat) {
                    case "darat":
                        searchProduct.habitat.darat == true;
                        break;
                    case "air":
                        searchProduct.habitat.air == true;
                        break;
                    case "udara":
                        searchProduct.habitat.udara == true;
                        break;
                    default:
                        delete searchProduct.habitat;
                        break;
                }
                for (const key in searchProduct.habitat) {
                    if (searchProduct.habitat[key as keyof Habitat] == false) {
                        delete searchProduct.habitat[key as keyof Habitat];
                    }
                }
            }

            data = await findProductsByCategory(searchProduct);
        }
        return res.status(200).json({
            message: "Ambil product berhasil",
            data
        });
    } catch (error: Error | unknown) {
        next(new Error(`[controller][product] - ${(error as Error).message}`));
    }
};

export const getProductById = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const productId = req.params.id;
        const { error, value } = getProductByIdValidation(productId);
        if (error !== undefined) {
            return res.status(400).json({
                error: error?.details[0].message,
                message: "Ambil data gagal"
            });
        }
        const data = await findProductById(value);
        if (data === null) {
            return res.status(400).json({
                error: "400 Bad Request",
                message: "Data dengan id tersebut tidak ditemukan"
            });
        }
        return res.status(200).json({
            message: "Ambil data berhasil",
            data
        });
    } catch (error: Error | unknown) {
        next(
            new Error(
                `[controller][getProductById] - ${(error as Error).message}`
            )
        );
    }
};

export const addProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const payload = req.body;
        const { error, value } = addProductValidation(payload);
        if (error !== undefined) {
            return res.status(400).json({
                error: error.details[0].message,
                message: "Input tidak valid"
            });
        }
        if (value.photo == "") {
            value.photo = "product.jpg";
        }
        const data = await createProduct(value);
        return res.status(201).json({
            message: "Tambah data berhasil",
            data
        });
    } catch (error: Error | unknown) {
        next(
            new Error(`[controller][addProduct] - ${(error as Error).message}`)
        );
    }
};

export const editProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const productId = req.params.id;
        const payload = req.body;
        const { error, value } = editProductValidation(payload);
        if (error != undefined) {
            return res.status(400).json({
                error: error.details[0].message,
                message: "Ubah data gagal"
            });
        }
        if (value.photo == "") {
            value.photo = "product.jpg";
        }
        const data = await updateProduct(productId, value);
        return res.status(200).json({
            message: "Ubah data berhasil",
            data
        });
    } catch (error: Error | unknown) {
        next(
            new Error(`[controller][editProduct] - ${(error as Error).message}`)
        );
    }
};
