import { Request, Response } from "express";
import Services from "../../services/index.js";

async function deleteCardCtr(req:Request,res:Response) {
    const {title} = req.body;
    const id = res.locals.user_id.id;

    await Services.card.del(title,id)
    
    res.sendStatus(200);
}

export default deleteCardCtr;