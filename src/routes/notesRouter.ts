import { Router } from "express";

const notesRouter = Router();

notesRouter.get('/notes');

export default notesRouter;