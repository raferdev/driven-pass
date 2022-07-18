import { NextFunction, Request, Response } from "express";
import { newCredentialRequest } from "../../../interfaces/credentials.js";
import { credentialsSchema } from "../../../schemas/credentials.js";

function newCredentialSchemaMd(req:Request,res:Response,next:NextFunction) {
    const newCredential:newCredentialRequest = req.body;

    const validate = credentialsSchema.validate(newCredential)

    if(validate.error) {
        throw {type:'schema_validation', message:validate.error.message}
    }

    next()
}

export default newCredentialSchemaMd;