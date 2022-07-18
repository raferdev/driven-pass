import { Token } from "../interfaces/auth";
import { newCredentialRequest } from "../interfaces/credentials.js";
import Repositories from "../repositories/index.js";
import Utils from "../utils/index.js";

async function create(credential:newCredentialRequest,id:Token) {
    const newCredential = {
        user_id:id.id,
        title:credential.title,
        url:Utils.data.encrypt(credential.url),
        name:Utils.data.encrypt(credential.name),
        password:Utils.data.encrypt(credential.password),
    }

    return await Repositories.credential.create(newCredential)
    
}

async function findAll(id:number) {
    const result =  await Repositories.credential.findAll(id);
    if(!result) {
        return 'Do not found!'
    }
    result.forEach(credential => {
        credential.url = Utils.data.decrypt(credential.url)
        credential.name = Utils.data.decrypt(credential.name)
        credential.password = Utils.data.decrypt(credential.password)
    })
    return result;
}

async function del(title:string,id:number) {
    const deleteCard = {
        user_id:id,
        title:title
    }
    
   return await Repositories.credential.del(deleteCard)
}

const credential = {
    create,
    findAll,
    del
}
export default credential;