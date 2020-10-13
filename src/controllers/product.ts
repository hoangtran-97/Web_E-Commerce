import { Request, Response, NextFunction } from "express";

import Product from "../models/Product";
import ProductService from "../services/product";
import {
    NotFoundError,
    BadRequestError,
    InternalServerError,
} from "../helpers/apiError";

export const findAll = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        res.json(await ProductService.findAll());
    } catch (error) {
        next(new NotFoundError("Product not found", error));
    }
};

export const findById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        res.json(await ProductService.findById(req.params.productId));
    } catch (error) {
        next(new NotFoundError("Product not found", error));
    }
};

export const findByName = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        res.json(await ProductService.findByName(req.params.productName));
    } catch (error) {
        next(new NotFoundError("Product not found", error));
    }
};

export const findByCategories = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        res.json(
            await ProductService.findByCategories(req.params.productCategories)
        );
    } catch (error) {
        next(new NotFoundError("Product not found", error));
    }
};

export const findByVariants = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        res.json(
            await ProductService.findByVariants(req.params.productVariants)
        );
    } catch (error) {
        next(new NotFoundError("Product not found", error));
    }
};

export const createProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const {
            name,
            description,
            categories,
            variants,
            sizes,
            img,
            imgLarge,
            price,
        } = req.body;
        const product = new Product({
            name,
            description,
            categories,
            variants,
            sizes,
            img,
            imgLarge,
            price,
        });
        await ProductService.create(product);
        res.json(product);
    } catch (error) {
        if (error.name === "ValidationError") {
            next(new BadRequestError("Invalid Request", error));
        } else {
            next(new InternalServerError("Internal Server Error", error));
        }
    }
};

export const updateProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const update = req.body;
        const productId = req.params.productId;
        const updatedProduct = await ProductService.update(productId, update);
        res.json(updatedProduct);
    } catch (error) {
        next(new NotFoundError("Product not found", error));
    }
};

export const deleteProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        await ProductService.deleteProduct(req.params.productId);
        res.status(204).end();
    } catch (error) {
        next(new NotFoundError("Product not found", error));
    }
};
