import supertest from "supertest";
import app from "../src/app.js";
import { createUser } from "./factory/userFactory.js";

describe("POST /signin", ()=>{
    it("should return status 201 when create user",async ()=> {
        const user = await createUser()
        const response = await supertest(app).post("/signin").send({ email: user.insertedUser.email, password: user.newPass });
        expect(response.status).toBe(200);
    })
})