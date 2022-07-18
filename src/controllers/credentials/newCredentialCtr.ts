import { Request, Response } from "express";
import { newCredentialRequest } from "../../interfaces/credentials.js";
import Services from "../../services/index.js";

async function newCredentialCtr(req:Request,res:Response) {
    const newCredential:newCredentialRequest = req.body;
    const id = res.locals.user_id

    await Services.credential.create(newCredential,id);
    
    res.sendStatus(200);
}

export default newCredentialCtr