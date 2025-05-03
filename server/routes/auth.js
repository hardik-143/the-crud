import express from "express";
import {
  register,
  login,
  logout,
  checkAuth,
  verifyToken,
  generateNewApiKey,
} from "../controllers/authController.js";

const router = express.Router();

// Public routes
router.post("/register", register);
router.post("/login", login);

// Protected routes
router.get("/check", verifyToken, checkAuth);
router.post("/logout", logout);

router.post("/generate-new-api-key", generateNewApiKey);

export default router;
