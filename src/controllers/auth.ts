import { Request, Response, NextFunction } from "express";

import AuthService from "../services/auth";
import {
    NotFoundError,
    BadRequestError,
    InternalServerError,
} from "../helpers/apiError";

export const googleTokenId = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { tokenId } = req.body;
        await AuthService.googleTokenId(tokenId);
        res.json(tokenId);
    } catch (error) {
        if (error.name === "ValidationError") {
            next(new BadRequestError("Invalid Request", error));
        } else {
            next(new InternalServerError("Internal Server Error", error));
        }
    }
};
