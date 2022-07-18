import { NextFunction, Request, Response } from "express";
import { NewUser } from "../../interfaces/auth.js";
import { newUserSchema } from "../../schemas/signup.js";

function signUpSchemaMd(req:Request,res:Response,next:NextFunction) {
    const newUser:NewUser = req.body;

    const validate = newUserSchema.validate(newUser)

    if(validate.error) {
        throw {type:'schema_validation', message:validate.error.message}
    }

    next()
}

export default signUpSchemaMd;