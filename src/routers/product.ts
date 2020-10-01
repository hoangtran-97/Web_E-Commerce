import express from "express";

import {
    findAll,
    findById,
    findByName,
    findByCategories,
    findByVariants,
    createProduct,
    updateProduct,
    deleteProduct,
} from "../controllers/product";

const router = express.Router();

router.get("/", findAll);
router.get("/:productId", findById);
router.get("/findByName/:productName", findByName);
router.get("/findByCategories/:productCategories", findByCategories);
router.get("/findByVariants/:productVariants", findByVariants);

router.post("/", createProduct);

router.put("/:productId", updateProduct);

router.delete("/:productId", deleteProduct);

export default router;
