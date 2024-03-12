import { type Request, type Response, type NextFunction } from "express";
import { registerUserValidation } from "../validations/user.validation";
import { encrypt } from "../utils/bcrypt";
import { createUser } from "../services/user.service";

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
