import { Request, Response, NextFunction } from "express";

import User from "../models/User";
import UserService from "../services/user";
import {
    NotFoundError,
    BadRequestError,
    InternalServerError,
} from "../helpers/apiError";

export const createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const {
            userName,
            firstName,
            lastName,
            email,
            isAdmin,
            isBanned,
            password,
        } = req.body;
        const user = new User({
            userName,
            firstName,
            lastName,
            email,
            isAdmin,
            isBanned,
            password,
        });
        await UserService.create(user);
        res.json(user);
    } catch (error) {
        if (error.name === "ValidationError") {
            next(new BadRequestError("Invalid Request", error));
        } else {
            next(new InternalServerError("Internal Server Error", error));
        }
    }
};
export const login = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
    } catch (error) {}
};
export const logout = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
    } catch (error) {}
};
export const updateUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
    } catch (error) {}
};
export const forgotPassword = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
    } catch (error) {}
};
