import "dotenv/config";
import jsonWebToken, { type JwtPayload } from "jsonwebtoken";
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

export const verifyAccessToken = (
    token: string
): string | null | JwtPayload => {
    try {
        return jsonWebToken.verify(token, String(process.env.JWT_SECRET));
    } catch (error) {
        return null;
    }
};
