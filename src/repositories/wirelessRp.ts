import client from "../config/database.js";
import { deleteCard } from "../interfaces/card.js";
import { newWireless } from "../interfaces/wireless.js";

async function create(newWireless:newWireless) {
    return await client.wireless.create({data:newWireless})
}
async function findAll(id:number) {
    return await client.wireless.findMany({where:{user_id:id}});
}
async function del(credential:deleteCard) {
    return await client.wireless.delete({where:{user_id_title:credential}})
}
const wireless = {
    create,
    findAll,
    del
};

export default wireless;