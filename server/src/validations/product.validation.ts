import Joi from "joi";

export const getProductsValidation = (
    payload: unknown
): Joi.ValidationResult<unknown> => {
    const schema = Joi.object({
        class: Joi.string()
            .trim()
            .allow(
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
            .allow(
                "peliharaan",
                "peternakan",
                "militer",
                "hewan_kurban",
                "material"
            ),
        habitat: Joi.string().trim().allow("darat", "air", "udara")
    });

    return schema.validate(payload);
};

export const getProductByIdValidation = (
    id: string
): Joi.ValidationResult<string> => {
    const schema = Joi.string().trim().length(6);

    return schema.validate(id);
};
