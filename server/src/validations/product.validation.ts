import Joi from "joi";
import { type InputProduct } from "../types/product.type";

export const getProductsValidation = (
    payload: unknown
): Joi.ValidationResult<unknown> => {
    const schema = Joi.object({
        class: Joi.string()
            .trim()
            .valid(
                "Mammalia",
                "Aves",
                "Reptilia",
                "Amphibia",
                "Osteichthyes",
                "Chondrychthyes",
                "Arachnida",
                "Insecta",
                "Mollusca",
                "Echinodermata",
                "Chilopoda"
            ),
        utility: Joi.string()
            .trim()
            .valid(
                "peliharaan",
                "peternakan",
                "militer",
                "hewan_kurban",
                "material"
            ),
        habitat: Joi.string().trim().valid("darat", "air", "udara")
    });

    return schema.validate(payload);
};

export const getProductByIdValidation = (
    id: string
): Joi.ValidationResult<string> => {
    const schema = Joi.string().trim().length(6);

    return schema.validate(id);
};

export const addProductValidation = (
    payload: InputProduct
): Joi.ValidationResult<InputProduct> => {
    const schema = Joi.object({
        name: Joi.string().trim().required(),
        photo: Joi.string().trim().allow("").required(),
        class: Joi.string()
            .trim()
            .required()
            .valid(
                "Mammalia",
                "Aves",
                "Reptilia",
                "Amphibia",
                "Osteichthyes",
                "Chondrychthyes",
                "Arachnida",
                "Insecta",
                "Mollusca",
                "Echinodermata",
                "Chilopoda"
            ),
        utility: Joi.array()
            .items(
                Joi.string().valid(
                    "peliharaan",
                    "peternakan",
                    "militer",
                    "hewan_kurban",
                    "material"
                )
            )
            .required(),
        habitat: Joi.array()
            .items(Joi.string().valid("darat", "air", "udara"))
            .required(),
        price: Joi.number().required(),
        discount: Joi.number().min(0).max(100),
        seller_id: Joi.string().trim().required(),
        quantity: Joi.number().required()
    });

    return schema.validate(payload);
};

export const editProductValidation = (
    payload: InputProduct
): Joi.ValidationResult<InputProduct> => {
    const schema = Joi.object({
        name: Joi.string().trim().required(),
        photo: Joi.string().trim().allow("").required(),
        class: Joi.string()
            .trim()
            .required()
            .valid(
                "Mammalia",
                "Aves",
                "Reptilia",
                "Amphibia",
                "Osteichthyes",
                "Chondrychthyes",
                "Arachnida",
                "Insecta",
                "Mollusca",
                "Echinodermata",
                "Chilopoda"
            ),
        utility: Joi.array()
            .items(
                Joi.string().valid(
                    "peliharaan",
                    "peternakan",
                    "militer",
                    "hewan_kurban",
                    "material"
                )
            )
            .required(),
        habitat: Joi.array()
            .items(Joi.string().valid("darat", "air", "udara"))
            .required(),
        price: Joi.number().required(),
        discount: Joi.number().min(0).max(100),
        quantity: Joi.number().required()
    });

    return schema.validate(payload);
};
