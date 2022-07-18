import { Request, Response } from "express";
import Services from "../../services/index.js";

async function deleteCredentialCtr(req:Request,res:Response) {
    const id = res.locals.user_id.id
    const {title} = req.body;

    await Services.credential.del(title,id)

    res.sendStatus(200);
}

export default deleteCredentialCtr