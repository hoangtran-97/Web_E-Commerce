import express from "express";
import passport from "passport";

import { googleTokenId } from "../controllers/auth";
import { findAll } from "../controllers/movie";

const router = express.Router();
router.get("/", findAll);
router.post(
    "/googleTokenId",
    passport.authenticate("google-id-token"),
    googleTokenId
);

export default router;
