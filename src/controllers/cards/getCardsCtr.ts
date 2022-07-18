import { Request, Response } from "express";
import Services from "../../services/index.js";

async function getCardsCtr(req:Request,res:Response) {
const id = res.locals.user_id.id;
   const result =  await Services.card.findAll(id);

   res.send(result);
}

export default getCardsCtr