import { NextFunction, Request, Response } from "express";
import { newCardRequest } from "../../interfaces/card.js";
import { cardsSchema } from "../../schemas/card.js";

function newCardSchemaMd(req:Request,res:Response,next:NextFunction) {
    const newCard:newCardRequest = req.body;

    const validate = cardsSchema.validate(newCard)

    if(validate.error) {
        throw {type:'schema_validation', message:validate.error.message}
    }

    next()

}

export default newCardSchemaMd;