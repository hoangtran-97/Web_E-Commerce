import express from "express";
import passport from "passport";

import { googleTokenId } from "../controllers/auth";

const router = express.Router();
router.post(
    "/googleTokenId",
    passport.authenticate("google-id-token"),
    googleTokenId
);

export default router;
