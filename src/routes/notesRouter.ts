import { Router } from "express";
import deleteNotesCtr from "../controllers/notes/deleteNotesCtr.js";
import getNotesCtr from "../controllers/notes/getNotesCtr.js";
import newNotesCtr from "../controllers/notes/newNotesCtr.js";
import deleteCardSchemaMd from "../middlewares/schemas/deleteCardSchemaMd.js";
import newNoteSchemaMd from "../middlewares/schemas/notes/newNoteSchemaMd.js";
import tokenBearerMd from "../middlewares/tokenBearerMd.js";

const notesRouter = Router();

notesRouter.post('/notes',tokenBearerMd,newNoteSchemaMd,newNotesCtr);
notesRouter.get('/notes',tokenBearerMd,getNotesCtr);
notesRouter.delete('/notes',tokenBearerMd,deleteCardSchemaMd,deleteNotesCtr)

export default notesRouter;