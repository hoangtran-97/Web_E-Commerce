import express from "express";

import {
    createUser,
    login,
    logout,
    updateUser,
    forgotPassword,
} from "../controllers/user";

const router = express.Router();

router.post("/", createUser);
router.post("/login", login);
router.get("/logout", logout);
router.put("/:userId", updateUser);
router.post("/forgotPasswordRequest", forgotPassword);

export default router;
