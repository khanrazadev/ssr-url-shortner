import express from "express";
import {
  generateNewShortUrl,
  getAnalytics,
  getShortId,
} from "../controllers/url-controllers.js";
const router = express.Router();

router.post("/", generateNewShortUrl);
router.get("/:shortId", getShortId);
router.get("/analytics/:shortId", getAnalytics);

export default router;
