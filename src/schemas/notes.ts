import Joi from "joi";
import { notesSchemaRequest } from "../interfaces/notes";


export const notesSchema = Joi.object<notesSchemaRequest>({
    title:Joi.string().max(50).required(),
    text:Joi.string().required()
});