import { Token } from "../interfaces/auth";
import { newCredentialRequest } from "../interfaces/credentials.js";
import Repositories from "../repositories/index.js";

async function create(credential:newCredentialRequest,id:Token) {
    const newCredential = {
        user_id:id.id,
        title:credential.title,
        url:credential.url,
        name:credential.name,
        password:credential.password,
    }

    return await Repositories.credential.create(newCredential)
    
}

async function findAll(id:number) {
    const result =  await Repositories.credential.findAll(id);
    if(!result) {
        return 'Do not found!'
    }
    return result;
}

async function del(title:string,id:number) {
    const deleteCard = {
        user_id:id,
        title:title
    }
    
   return await Repositories.card.del(deleteCard)
}

const credential = {
    create,
    findAll,
    del
}
export default credential;