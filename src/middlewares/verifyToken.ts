import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { JWT_SECRET } from "../util/secrets";
import { UnauthorizedError } from "../helpers/apiError";

const getTokenFrom = (req: Request) => {
    const authorization = req.get("authorization");
    if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
        return authorization.substring(7);
    }
    return null;
};

export const verifyToken = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const token = getTokenFrom(req);
    if (token) {
        try {
            jwt.verify(token, JWT_SECRET);
        } catch (error) {
            next(new UnauthorizedError("token missing or invalid", error));
        }
    } else {
        next(new UnauthorizedError("token missing or invalid"));
    }
};
