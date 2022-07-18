import { NextFunction, Request, Response } from "express";
import Services from "../../services/index.js";

async function getNotesCtr(req:Request,res:Response,next:NextFunction) {
    const id = res.locals.user_id.id
    const result = await Services.notes.findAll(id);

    res.send(result);
}

export default getNotesCtr;