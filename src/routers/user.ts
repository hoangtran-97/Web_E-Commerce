import express from "express";

import {
    createUser,
    login,
    logout,
    updateUser,
    forgotPassword,
    findAll,
    findById,
} from "../controllers/user";

const router = express.Router();

router.get("/", findAll);
router.get("/:userId", findById);
router.get("/logout", logout);
router.post("/", createUser);
router.post("/forgotPasswordRequest", forgotPassword);
router.post("/login", login);
router.put("/:userId", updateUser);

export default router;
