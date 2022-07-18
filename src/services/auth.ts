import { NewUser } from "../interfaces/auth.js";
import Repositories from "../repositories/index.js";

async function create(newUser:NewUser) {
   return await Repositories.user.create(newUser)
}




const user = {
    create 
};

export default user;