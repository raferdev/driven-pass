import { Router } from "express";
import authRouter from "./authRouter.js";
import cardRouter from "./cardRouter.js";
import credentialsRouter from "./credentialsRouter.js";
import notesRouter from "./notesRouter.js";
import wirelessRouter from "./wirelessRouter.js";

const router = Router();

router.use(authRouter);
router.use(cardRouter);
router.use(credentialsRouter);
router.use(notesRouter);
router.use(wirelessRouter);

export default router;