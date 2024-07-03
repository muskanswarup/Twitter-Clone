import express from "express";
import { createTweet, deleteTweet } from "../controllers/tweetController.js";
import isAuthenticated from "../config/auth.js";

const router = express.Router();

// router.route("/register").post(Register);
// router.route("/login").post(Login);
// router.route("/logout").get(logout);

router.route("/create").post(isAuthenticated, createTweet);
router.route("/delete/:id").delete(deleteTweet);

export default router;