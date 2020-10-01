import express from "express";

const router = express.Router();

router.get("/", findAll);
router.get("/:productId", findById);
router.get("/:productName", findByName);
router.get("/:productCategories", findByCategories);
router.get("/:productVariants", findByVariants);

router.post("/", createProduct);

router.put("/:productId", updateProduct);

router.delete("/:productId", deleteProduct);
