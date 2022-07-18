import { Token } from "../interfaces/auth";
import { deleteCard } from "../interfaces/card.js";
import { notesSchema, notesSchemaRequest } from "../interfaces/notes";
import Repositories from "../repositories/index.js";
import Utils from "../utils/index.js";

async function create(note:notesSchemaRequest,id:Token) {
    const newNote:notesSchema = {
        user_id:id.id,
        title:note.title,
        text:Utils.data.encrypt(note.text)
    }

    return await Repositories.notes.create(newNote)
    
}

async function findAll(id:number) {
    const result =  await Repositories.notes.findAll(id);
    if(!result) {
        return 'Do not found!'
    }
    result.forEach(note => {
        note.text = Utils.data.decrypt(note.text)
    })
    return result;
}

async function del(title:string,id:number) {
    const deleteCard:deleteCard = {
        user_id:id,
        title:title
    }
    
   return await Repositories.notes.del(deleteCard)
}

const notes = {
    create,
    findAll,
    del
}
export default notes;