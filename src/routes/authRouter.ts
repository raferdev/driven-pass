import { Router } from "express";
import signUpCtr from "../controllers/auth/signUpCtr.js";
import signUpSchemaMd from "../middlewares/schemas/signUpSchemaMd.js";

const authRouter = Router();

authRouter.get('/signup',signUpSchemaMd,signUpCtr)

export default authRouter;