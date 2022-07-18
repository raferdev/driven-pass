import { Router } from "express";
import signUpCtr from "../controllers/auth/signUpCtr.js";
import signUpSchemaMd from "../middlewares/schemas/signUpSchemaMd.js";

const authRouter = Router();

authRouter.post('/signup',signUpSchemaMd,signUpCtr)
authRouter.post('/signin',signUpSchemaMd)

export default authRouter;