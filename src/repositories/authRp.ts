import client from "../config/database.js";
import { NewUser } from "../interfaces/auth.js";

async function create(newUser:NewUser) {
    return await client.user.create({data:newUser})
}

const user = {
    create
};

export default user;