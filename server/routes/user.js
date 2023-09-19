import express from "express";
const router = express.Router();
import { userSignUp, userLogin, forgotPassword } from "../controllers/user-controllers.js";

router.post("/sign-up", userSignUp);

router.post("/login", userLogin);

router.post('/update-password',forgotPassword)

export default router;
