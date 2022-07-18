import client from "../config/database.js";
import { deleteCard } from "../interfaces/card.js";
import { notesSchema } from "../interfaces/notes.js";

async function create(newNotes:notesSchema) {
    return await client.notes.create({data:newNotes})
}
async function findAll(id:number) {
    return await client.notes.findMany({where:{user_id:id}});
}
async function del(credential:deleteCard) {
    return await client.notes.delete({where:{user_id_title:credential}})
}
const notes = {
    create,
    findAll,
    del
};

export default notes;