import Joi from "joi";
import { NewUser } from "../interfaces/auth";

export const newUserSchema = Joi.object<NewUser>({
    email:Joi.string().email().required(),
    password:Joi.string().min(10).required()
})