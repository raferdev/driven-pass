import { Request, Response } from "express";
import { NewUser } from "../../interfaces/auth.js";
import Services from "../../services/index.js";

async function signUpCtr(req:Request,res:Response) {
    const newUser:NewUser = req.body;

    await Services.user.create(newUser)
    
    res.sendStatus(200);
}

export default signUpCtr;