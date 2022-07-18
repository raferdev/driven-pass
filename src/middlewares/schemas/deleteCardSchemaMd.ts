import { NextFunction, Request, Response } from "express";
import { deleteCardRequest } from "../../interfaces/card.js";
import { deleteCardSchema } from "../../schemas/card.js";

function deleteCardSchemaMd(req:Request,res:Response,next:NextFunction) {
    const deleteCard:deleteCardRequest = req.body;

    const validate = deleteCardSchema.validate(deleteCard)

    if(validate.error) {
        throw {type:'schema_validation', message:validate.error.message}
    }

    next()

}

export default deleteCardSchemaMd;