/* eslint-disable @typescript-eslint/camelcase */
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
        const { id_token } = req.body;
        const { user } = req;
        const token = await AuthService.googleTokenId(id_token);
        res.send({ token, user });
    } catch (error) {
        if (error.name === "ValidationError") {
            next(new BadRequestError("Invalid Request", error));
        } else {
            next(new InternalServerError("Internal Server Error", error));
        }
    }
};
