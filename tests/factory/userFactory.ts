import faker from "faker";
import bcrypt from "bcrypt";
import client from "../../src/config/database.js";

export async function createUser () {
    const user = {
      email: faker.internet.email(),
      password: "12345678910",
      hashedPassword: bcrypt.hashSync("12345678910", 10)
    };
  
    const insertedUser = await client.user.create({
          data: {
              email: user.email,
              password: user.hashedPassword
          }
      });
      const newUser = {
        insertedUser,
        newPass:"12345678910"
      };
    return newUser;
  } 