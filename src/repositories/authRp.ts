import client from "../config/database.js";
import { Auth } from "../interfaces/auth.js";

async function create(newUser:Auth) {
    return await client.user.create({data:newUser})
}

const user = {
    create
};

export default user;