import client from "../config/database.js";
import { deleteCard, newCard } from "../interfaces/card.js";
async function create(newCard:newCard) {
    return await client.cards.create({data:newCard})
}
async function findAll(id:number) {
    return await client.cards.findMany({where:{user_id:id}});
}
async function del(deleteCard:deleteCard) {
    return await client.cards.delete({where:deleteCard})
}
const card = {
    create,
    findAll,
    del
};

export default card;