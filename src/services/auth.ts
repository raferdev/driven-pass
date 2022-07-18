import { Auth } from "../interfaces/auth.js";
import Repositories from "../repositories/index.js";
import bcrypt from "bcrypt";
import "dotenv/config";

async function create(newUser:Auth) {
    
    newUser.password = bcrypt.hashSync(newUser.password, +process.env.SALT_ROUNDS);

    return await Repositories.user.create(newUser)
}




const user = {
    create 
};

export default user;