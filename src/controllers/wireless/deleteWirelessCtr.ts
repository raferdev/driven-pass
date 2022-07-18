import { Request, Response } from "express";
import Services from "../../services/index.js";

async function deleteWirelessCtr(req:Request,res:Response) {
    
    const id = res.locals.user_id.id;
    const {title} = req.body;

    await Services.wireless.del(title,id);

    res.sendStatus(200);

};

export default deleteWirelessCtr;