import client from "../config/database.js";
import { Auth } from "../interfaces/auth.js";

async function create(newUser:Auth) {
    return await client.user.create({data:newUser})
}
async function find(user:Auth) {
    return await client.user.findUniqueOrThrow({where:{email:user.email},select:{id:true,email:true,password:true,_count:{select:{wireless:true,notes:true,credentials:true,cards:true}}}})
}
const user = {
    create,
    find
};

export default user;