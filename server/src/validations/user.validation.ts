import Joi from "joi";
import { type LoginUser, type RegisterUser } from "../types/user.type";

export const registerUserValidation = (
    payload: RegisterUser
): Joi.ValidationResult<RegisterUser> => {
    const schema = Joi.object({
        name: Joi.string().trim().required(),
        email: Joi.string().trim().required().email(),
        password: Joi.string().min(6).max(15).required(),
        confirmPassword: Joi.string()
            .equal(Joi.ref("password"))
            .required()
            .label("confirm password"),
        gender: Joi.string().trim().required().valid("male", "female"),
        photo: Joi.string().trim().allow("").required(),
        domicileId: Joi.number().required().valid(1, 2, 3, 4, 5)
    });

    return schema.validate(payload);
};

export const loginUserValidation = (
    payload: LoginUser
): Joi.ValidationResult<LoginUser> => {
    const schema = Joi.object({
        email: Joi.string().trim().required().email(),
        password: Joi.string().trim().required()
    });

    return schema.validate(payload);
};
