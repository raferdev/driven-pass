import { Request, Response } from "express";
import Services from "../../services/index.js";

async function deleteNotesCtr(req:Request,res:Response) {
    const id = res.locals.user_id.id;
    const {title} = req.body;

    await Services.notes.del(title,id);

    res.sendStatus(200);
}

export default deleteNotesCtr;