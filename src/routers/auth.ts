import express from "express";

const router = express.Router();

import { googleTokenId } from "../controllers/auth";

router.post("/google-token-id", googleTokenId);

export default router;
