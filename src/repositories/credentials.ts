import client from "../config/database.js";
import { deleteCard } from "../interfaces/card.js";
import { newCredential } from "../interfaces/credentials.js";

async function create(newCredential:newCredential) {
    return await client.credentials.create({data:newCredential})
}
async function findAll(id:number) {
    return await client.credentials.findMany({where:{user_id:id}});
}
async function del(credential:deleteCard) {
    return await client.credentials.delete({where:{user_id_title:credential}})
}
const credential = {
    create,
    findAll,
    del
};

export default credential;