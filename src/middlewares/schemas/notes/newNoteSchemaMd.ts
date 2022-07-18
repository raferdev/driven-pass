import { NextFunction, Request, Response } from "express";
import { notesSchemaRequest } from "../../../interfaces/notes.js";
import { notesSchema } from "../../../schemas/notes.js";

function newNoteSchemaMd(req:Request,res:Response,next:NextFunction) {
    const newNote:notesSchemaRequest = req.body;

    const validate = notesSchema.validate(newNote)

    if(validate.error) {
        throw {type:'schema_validation', message:validate.error.message}
    }

    next()

}

export default newNoteSchemaMd;