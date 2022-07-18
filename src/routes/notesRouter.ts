import { Router } from "express";
import getNotesCtr from "../controllers/notes/getNotesCtr.js";
import newNotesCtr from "../controllers/notes/newNotesCtr.js";
import newNoteSchemaMd from "../middlewares/schemas/notes/newNoteSchemaMd.js";
import tokenBearerMd from "../middlewares/tokenBearerMd.js";

const notesRouter = Router();

notesRouter.post('/notes',tokenBearerMd,newNoteSchemaMd,newNotesCtr);
notesRouter.get('/notes',tokenBearerMd,getNotesCtr);

export default notesRouter;