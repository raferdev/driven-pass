import { Token } from "../interfaces/auth";
import { deleteCard, newCardRequest } from "../interfaces/card.js";
import Repositories from "../repositories/index.js";
import Utils from "../utils/index.js";

async function create(card:newCardRequest,id:Token) {
    const newCard = {
        user_id:id.id,
        title:card.title,
        card_number:Utils.data.encrypt(card.card_number),
        name_user:Utils.data.encrypt(card.name_user),
        secure_code:Utils.data.encrypt(card.secure_code),
        exp_date:Utils.data.encrypt(card.exp_date),
        password:Utils.data.encrypt(card.password),
        virtual_card:card.virtual_card,
        type_id:card.type_id
    }

    return await Repositories.card.create(newCard)
    
}

async function findAll(id:number) {
    const result =  await Repositories.card.findAll(id);
    if(!result) {
        return 'Do not found!'
    }
    result.forEach(card =>{
        card.card_number = Utils.data.decrypt(card.card_number)
        card.name_user = Utils.data.decrypt(card.name_user)
        card.secure_code = Utils.data.decrypt(card.secure_code)
        card.exp_date = Utils.data.decrypt(card.exp_date)
        card.password = Utils.data.decrypt(card.password)
    })
    return result;
}

async function del(title:string,id:number) {
    const deleteCard:deleteCard = {
        user_id:id,
        title:title
    }
    
   return await Repositories.card.del(deleteCard)
}

const card = {
    create,
    findAll,
    del
}
export default card;