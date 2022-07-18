import { Token } from "../interfaces/auth";
import { newCardRequest } from "../interfaces/card.js";
import Repositories from "../repositories/index.js";

async function create(card:newCardRequest,id:Token) {
    const newCard = {
        user_id:id.id,
        title:card.title,
        card_number:card.card_number,
        name_user:card.name_user,
        secure_code:card.secure_code,
        exp_date:card.exp_date,
        password:card.password,
        virtual_card:card.virtual_card,
        type_id:card.type_id
    }

    return await Repositories.card.create(newCard)
    
}

async function findAll() {
    
}

async function del(cardNumber:string) {
    
}

const card = {
    create,
    findAll,
    del
}
export default card;