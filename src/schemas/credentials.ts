import Joi from "joi";
import { newCredentialRequest } from "../interfaces/credentials";


export const credentialsSchema = Joi.object<newCredentialRequest>({
    title:Joi.string().max(50).required(),
    url:Joi.string().required(),
    name:Joi.string().required(),
    password: Joi.string().required()
});
