import { NextFunction, Request, Response } from "express";
import { Auth } from "../../interfaces/auth.js";
import { authSchema } from "../../schemas/auth.js";

function authSchemaMd(req:Request,res:Response,next:NextFunction) {
    const newUser:Auth = req.body;

    const validate = authSchema.validate(newUser)

    if(validate.error) {
        throw {type:'schema_validation', message:validate.error.message}
    }

    next()
}

export default authSchemaMd;