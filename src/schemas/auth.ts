import Joi from "joi";
import { Auth } from "../interfaces/auth";

export const authSchema = Joi.object<Auth>({
    email:Joi.string().email().required(),
    password:Joi.string().min(10).required()
})