import { Request, Response } from "express";
import { Auth } from "../../interfaces/auth.js";
import Services from "../../services/index.js";

async function signInCtr(req:Request,res:Response) {
    const user:Auth = req.body;
    
   const result = await Services.auth.signIn(user);

    res.send(result);
}

export default signInCtr;