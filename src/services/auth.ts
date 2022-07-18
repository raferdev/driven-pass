import { Auth } from "../interfaces/auth.js";
import Repositories from "../repositories/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

async function create(newUser:Auth) {
    
    newUser.password = bcrypt.hashSync(newUser.password, +process.env.SALT_ROUNDS);

    return await Repositories.user.create(newUser)
}

async function signIn(user:Auth) {
    const userDb = await Repositories.user.find(user);

    const validPassword = bcrypt.compareSync(user.password,userDb.password);

    if(!validPassword) {
        throw {type:"auth_error",message:"Invalid password or email"}
    }
    const token = jwt.sign({email:userDb.email},process.env.JWT_SECRET,{ expiresIn:'12h' });

    const result = {
        token,
        email:userDb.email,
        count:userDb._count
    }

    return result;
}


const auth = {
    create,
    signIn
};

export default auth;