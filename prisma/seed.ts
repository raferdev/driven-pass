import client from "../src/config/database.js";

async function main(){

    await client.user.deleteMany()

  }
  main().catch(e => {
    console.log(e);
    process.exit(1);
  }).finally(async () => {
    await client.$disconnect();
  })