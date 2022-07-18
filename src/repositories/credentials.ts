import client from "../config/database.js";
import { newCredential } from "../interfaces/credentials.js";

async function create(newCredential:newCredential) {
    return await client.credentials.create({data:newCredential})
}
async function findAll(id:number) {
    return await client.credentials.findMany({where:{user_id:id}});
}
async function del(card) {
    return await client.credentials.delete({where:{user_id_title:card}})
}
const credential = {
    create,
    findAll,
    del
};

export default credential;