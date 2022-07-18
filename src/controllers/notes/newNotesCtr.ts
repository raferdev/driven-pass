import { Request, Response } from "express";
import Services from "../../services/index.js";

async function newNotesCtr(req:Request,res:Response) {
    const id = res.locals.user_id;
    const newNote = req.body;
    
    await Services.notes.create(newNote,id);

    res.sendStatus(200);
}

export default newNotesCtr;