import { Router } from "express";
import newNotesCtr from "../controllers/notes/newNotesCtr.js";
import newNoteSchemaMd from "../middlewares/schemas/notes/newNoteSchemaMd.js";
import tokenBearerMd from "../middlewares/tokenBearerMd.js";

const notesRouter = Router();

notesRouter.post('/notes',tokenBearerMd,newNoteSchemaMd,newNotesCtr);

export default notesRouter;