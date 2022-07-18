import { Token } from "../interfaces/auth";
import { deleteCard } from "../interfaces/card";
import { newWireless, newWirelessRequest } from "../interfaces/wireless.js";
import Repositories from "../repositories/index.js";
import Utils from "../utils/index.js";

async function create(wireless:newWirelessRequest,id:Token) {
    const newWireless:newWireless = {
        user_id:id.id,
        title:wireless.title,
        name:Utils.data.encrypt(wireless.name),
        password:Utils.data.encrypt(wireless.password)
    }

    return await Repositories.wireless.create(newWireless)
    
}

async function findAll(id:number) {
    const result =  await Repositories.wireless.findAll(id);
    if(!result) {
        return 'Do not found!'
    }
    result.forEach(wireless => {
        wireless.name = Utils.data.decrypt(wireless.name)
        wireless.password = Utils.data.decrypt(wireless.password)
    })
    return result;
}

async function del(title:string,id:number) {
    const deleteCard:deleteCard = {
        user_id:id,
        title:title
    }
    
   return await Repositories.wireless.del(deleteCard)
}

const wireless = {
    create,
    findAll,
    del
}
export default wireless;