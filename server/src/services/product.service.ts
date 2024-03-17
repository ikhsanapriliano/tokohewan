import ShortUniqueId from "short-unique-id";
import {
    type Habitat,
    type InputProduct,
    type Utility,
    type Product,
    type SearchProduct
} from "../types/product.type";
import prisma from "../utils/prisma";

const uid = new ShortUniqueId({ length: 4 });

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
    const data = await prisma.product.findMany({
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

export const findProductById = async (id: string): Promise<Product | null> => {
    const data = await prisma.product.findUnique({
        where: {
            id: id
        },
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

export const createProduct = async (
    payload: InputProduct
): Promise<Product> => {
    const utility: Utility = {
        peliharaan: false,
        peternakan: false,
        militer: false,
        hewan_kurban: false,
        material: false
    };
    payload.utility.forEach((item) => {
        switch (item) {
            case "peliharaan":
                utility.peliharaan = true;
                break;
            case "peternakan":
                utility.peternakan = true;
                break;
            case "militer":
                utility.militer = true;
                break;
            case "hewan_kurban":
                utility.hewan_kurban = true;
                break;
            case "material":
                utility.material = true;
                break;
        }
    });

    const habitat: Habitat = {
        darat: false,
        air: false,
        udara: false
    };
    payload.habitat.forEach((item) => {
        switch (item) {
            case "darat":
                habitat.darat = true;
                break;
            case "air":
                habitat.air = true;
                break;
            case "udara":
                habitat.udara = true;
                break;
        }
    });

    let freeDelivery: boolean = false;
    if (payload.price >= 1000000000) {
        freeDelivery = true;
    }

    const data = await prisma.$transaction(async (tx) => {
        const utilityId = await tx.utility.create({
            data: {
                id: `UY${uid.rnd()}`,
                peliharaan: utility.peliharaan,
                peternakan: utility.peternakan,
                militer: utility.militer,
                hewan_kurban: utility.hewan_kurban,
                material: utility.material
            },
            select: {
                id: true
            }
        });
        const habitatId = await tx.habitat.create({
            data: {
                id: `HT${uid.rnd()}`,
                darat: habitat.darat,
                air: habitat.air,
                udara: habitat.udara
            },
            select: {
                id: true
            }
        });
        const product = await tx.product.create({
            data: {
                id: `PT${uid.rnd()}`,
                name: payload.name,
                photo: payload.photo,
                class: payload.class,
                utility_id: utilityId.id,
                habitat_id: habitatId.id,
                quantity: payload.quantity,
                price: payload.price,
                sold: 0,
                discount: payload.discount,
                free_delivery: freeDelivery,
                rating: 0,
                seller_id: payload.seller_id
            },
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

        return product;
    });

    return data;
};
