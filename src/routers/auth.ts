import express from "express";

import { googleTokenId } from "../controllers/auth";

const router = express.Router();
router.post("/googleTokenId", googleTokenId);

export default router;
