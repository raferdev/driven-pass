import { Request, Response } from "express";
import Services from "../../services/index.js";

async function newCardCtr(req:Request,res:Response) {
    const newCard = req.body;
    const id = res.locals.user_id;

    await Services.card.create(newCard,id);
    
    res.sendStatus(200);
}

export default newCardCtr