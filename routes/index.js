import { Router } from "express";
import userRouter from './user.routes.js';
import { UserLogin, UserSignup } from "../controllers/user.controller.js";


const router = Router()

router.use("/user", userRouter);



// Non-protected public routes
router.post("/signup", UserSignup);
router.post("/login", UserLogin);

export default router;