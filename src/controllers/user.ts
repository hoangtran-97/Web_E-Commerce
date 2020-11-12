import { Request, Response, NextFunction } from "express";

import User from "../models/User";
import UserService from "../services/user";
import {
    NotFoundError,
    BadRequestError,
    InternalServerError,
} from "../helpers/apiError";
import { verifyToken } from "../middlewares/verifyToken";

export const findAll = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        res.json(await UserService.findAll());
    } catch (error) {
        next(new NotFoundError("Users not found", error));
    }
};

export const findById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        verifyToken(req, res, next);
        res.json(await UserService.findById(req.params.userId));
    } catch (error) {
        next(new NotFoundError("User not found", error));
    }
};

export const createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const {
            cart,
            userName,
            firstName,
            lastName,
            email,
            isAdmin,
            isBanned,
            googleId,
            password,
        } = req.body;
        const user = new User({
            cart,
            userName,
            firstName,
            lastName,
            email,
            isAdmin,
            isBanned,
            googleId,
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
        verifyToken(req, res, next);
        const update = req.body;
        const userId = req.params.userId;
        const updatedUser = await UserService.update(userId, update);
        res.json(updatedUser);
    } catch (error) {
        console.log("error here", error);
        next(new NotFoundError("User not found update", error));
    }
};
export const forgotPassword = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
    } catch (error) {}
};
