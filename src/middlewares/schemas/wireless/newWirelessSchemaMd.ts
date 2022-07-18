import { NextFunction, Request, Response } from "express";
import { newWirelessRequest } from "../../../interfaces/wireless.js";
import { wirelessSchema } from "../../../schemas/wireless.js";

function newWirelessSchemaMd(req:Request,res:Response,next:NextFunction) {
    const newWireless:newWirelessRequest = req.body;

    const validate = wirelessSchema.validate(newWireless)

    if(validate.error) {
        throw {type:'schema_validation', message:validate.error.message}
    }

    next()

}

export default newWirelessSchemaMd;