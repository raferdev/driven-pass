import { Request, Response } from "express";
import Services from "../../services/index.js";

async function newWirelessCtr(req:Request,res:Response) {
    const id = res.locals.user_id;
    const newWireless = req.body;
    
    await Services.wireless.create(newWireless,id)

    res.sendStatus(200);
}

export default newWirelessCtr;