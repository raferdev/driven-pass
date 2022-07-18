import Joi from "joi";
import { newCardRequest } from "../interfaces/card.js";

export const cardsSchema = Joi.object<newCardRequest>({
    title:Joi.string().max(50).required(),
    card_number:Joi.string().required(),
    name_user:Joi.string().required(),
    secure_code:Joi.string().required(),
    exp_date:Joi.string().required(),
    password:Joi.string().required(),
    virtual_card:Joi.boolean().required(),
    type_id:Joi.number().integer().required()
})