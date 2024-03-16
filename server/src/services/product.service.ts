import { type Product, type SearchProduct } from "../types/product.type";
import prisma from "../utils/prisma";

export const findAllProducts = async (): Promise<Product[]> => {
    const data = await prisma.product.findMany({
        select: {
            id: true,
            name: true,
            photo: true,
            class: true,
            utility: {
                select: {
                    peliharaan: true,
                    peternakan: true,
                    militer: true,
                    hewan_kurban: true,
                    material: true
                }
            },
            habitat: {
                select: {
                    darat: true,
                    air: true,
                    udara: true
                }
            },
            price: true,
            discount: true,
            free_delivery: true,
            rating: true,
            seller_id: true,
            quantity: true,
            sold: true
        }
    });
    return data;
};

export const findProductsByCategory = async (
    payload: SearchProduct
): Promise<Product[]> => {
    const data = prisma.product.findMany({
        where: payload,
        select: {
            id: true,
            name: true,
            photo: true,
            class: true,
            utility: {
                select: {
                    peliharaan: true,
                    peternakan: true,
                    militer: true,
                    hewan_kurban: true,
                    material: true
                }
            },
            habitat: {
                select: {
                    darat: true,
                    air: true,
                    udara: true
                }
            },
            price: true,
            discount: true,
            free_delivery: true,
            rating: true,
            seller_id: true,
            quantity: true,
            sold: true
        }
    });

    return data;
};
