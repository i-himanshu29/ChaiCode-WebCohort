import express from "express"
import { login, registerUser,verifyUser } from "../controller/user.controller.js"

const router = express.Router()

router.post("/register",registerUser);
// send token to the params "/:"
router.get("/verify/:token",verifyUser) ;
router.post("/login",login);

export default router