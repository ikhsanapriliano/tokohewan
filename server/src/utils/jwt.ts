import "dotenv/config";
import jsonWebToken from "jsonwebtoken";
import { type LoginUser } from "../types/user.type";

export const generateAccessToken = (user: LoginUser): string => {
    const token = jsonWebToken.sign(user, String(process.env.JWT_SECRET), {
        expiresIn:
            process.env.JWT_EXPIRES_IN != null
                ? String(process.env.JWT_EXPIRES_IN)
                : "1800s"
    });
    return token;
};
