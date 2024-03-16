import { type Request, type Response, type NextFunction } from "express";
import { verifyAccessToken } from "../utils/jwt";

export const authenticate = (
    req: Request,
    res: Response,
    next: NextFunction
): Response | void => {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(" ")[1];
    if (token === undefined) {
        return res.status(401).json({
            error: "401 Unauthorized",
            message: "Verifikasi token gagal"
        });
    }
    const user = verifyAccessToken(String(token));
    if (user === null) {
        return res.status(401).json({
            error: "401 Unauthorized",
            message: "Verifikasi token gagal"
        });
    }
    next();
};
