import express from "express";

import { googleTokenId } from "../controllers/auth";
import { findAll } from "../controllers/movie";

const router = express.Router();
router.get("/", findAll);
router.post("/googleTokenId", googleTokenId);

export default router;
