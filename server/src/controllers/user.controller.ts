import { type Request, type Response, type NextFunction } from "express";
import {
    loginUserValidation,
    registerUserValidation
} from "../validations/user.validation";
import { encrypt } from "../utils/bcrypt";
import { createUser, findUser } from "../services/user.service";
import logger from "../utils/winston";
import { compare } from "bcrypt";
import { generateAccessToken } from "../utils/jwt";

export const registerUser = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const { error, value } = registerUserValidation(req.body);
        if (error !== undefined) {
            return res.status(400).json({
                error: error.details[0].message,
                message: "Register gagal",
                data: value
            });
        }
        delete value.confirmPassword;
        if (value.photo === "") {
            switch (value.gender) {
                case "male":
                    value.photo = "male.jpg";
                    break;
                case "female":
                    value.photo = "female.jpg";
                    break;
            }
        }
        value.password = encrypt(value.password);
        const data = await createUser(value);
        return res.status(200).json({
            message: "Register berhasil",
            data
        });
    } catch (error: Error | unknown) {
        next(
            new Error(
                `[controller][registerUser] - ${(error as Error).message}`
            )
        );
    }
};

export const loginUser = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const { error, value } = loginUserValidation(req.body);
        if (error != undefined) {
            logger.error(error);
            return res.status(400).json({
                error: error.details[0].message,
                message: "Login gagal"
            });
        }
        const data = await findUser(value);
        if (data === null) {
            return res.status(404).json({
                error: "400 not found",
                message: "user dengan email tersebut tidak ditemukan"
            });
        }
        if (!compare(value.password, data.password)) {
            return res.status(400).json({
                error: "400 bad request",
                message: "password salah"
            });
        }
        const accessToken = generateAccessToken(value);
        return res.status(200).json({
            message: "Login berhasil",
            data,
            accessToken
        });
    } catch (error: Error | unknown) {
        next(
            new Error(`[controller][loginUser] - ${(error as Error).message}`)
        );
    }
};
