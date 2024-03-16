import { type Request, type Response, type NextFunction } from "express";
import {
    type SearchProduct,
    type Utility,
    type Habitat
} from "../types/product.type";
import {
    findAllProducts,
    findProductsByCategory
} from "../services/product.service";

export const getProducts = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const query = req.query;
        let data;
        if (
            query.class === undefined &&
            query.utility === undefined &&
            query.habitat === undefined
        ) {
            data = findAllProducts();
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

            if (query.class != "") {
                searchProduct.class = String(query.class);
            } else {
                delete searchProduct.class;
            }

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

            data = findProductsByCategory(searchProduct);
        }
        return res.status(200).json({
            message: "Ambil product berhasil",
            data
        });
    } catch (error: Error | unknown) {
        next(new Error(`[controller][product] - ${(error as Error).message}`));
    }
};
