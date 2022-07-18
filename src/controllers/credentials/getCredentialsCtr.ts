import { Request, Response } from "express";
import Services from "../../services/index.js";

async function getCredentialsCtr(req:Request,res:Response) {
    const id = res.locals.user_id.id

    const result = await Services.credential.findAll(id)

    res.send(result);
}

export default getCredentialsCtr