import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import User from "../models/User";
import UserService from "../services/user";
import {
    NotFoundError,
    BadRequestError,
    InternalServerError,
} from "../helpers/apiError";

const getTokenFrom = (req: Request) => {
    const authorization = req.get("authorization");
    if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
        return authorization.substring(7);
    }
    return null;
};

const verifyToken = (req: Request, res: Response) => {
    const token = getTokenFrom(req);
    console.log("token_________", token);

    if (token) {
        const decodedToken = jwt.verify(
            token,
            process.env.JWT_SECRET || "secret"
        );
        console.log("decoded_________", decodedToken);
        if (!decodedToken) {
            return res.status(401).json({ error: "token missing or invalid" });
        }
    } else {
        return res.status(401).json({ error: "token missing or invalid" });
    }
};
export const findAll = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        verifyToken(req, res);
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
        const update = req.body;
        const userId = req.params.userId;
        const updatedUser = await UserService.update(userId, update);
        res.json(updatedUser);
    } catch (error) {
        next(new NotFoundError("User not found", error));
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
