import Joi from "joi";
import { newWirelessRequest } from "../interfaces/wireless.js";


export const wirelessSchema = Joi.object<newWirelessRequest>({
    title:Joi.string().max(50).required(),
    name:Joi.string().required(),
    password:Joi.string().required()
})