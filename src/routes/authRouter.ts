import { Router } from "express";
import signInCtr from "../controllers/auth/signInCtr.js";
import signUpCtr from "../controllers/auth/signUpCtr.js";
import authSchemaMd from "../middlewares/schemas/authSchemaMd.js";

const authRouter = Router();

authRouter.post('/signup',authSchemaMd,signUpCtr)
authRouter.post('/signin',authSchemaMd,signInCtr)

export default authRouter;