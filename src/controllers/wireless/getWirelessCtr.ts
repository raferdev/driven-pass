import { Request, Response } from "express";
import Services from "../../services/index.js";

async function getWirelessCtr(req:Request,res:Response) {
    const id = res.locals.user_id.id;

    const result = await Services.wireless.findAll(id);

    res.send(result);
}

export default getWirelessCtr;