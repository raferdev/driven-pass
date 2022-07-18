import express, { json } from "express";
import "express-async-errors"
import cors from "cors";
import router from "./routes/index.js";
import chalk from "chalk";
import "dotenv/config";
import errorHandlerMd from "./middlewares/error/errorHandlerMd.js";

const app = express();

app.use(cors());
app.use(json());

app.use(router);
app.use(errorHandlerMd)

const PORT = +process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`${chalk.green('SERVER-ON')}: Listening on port ${chalk.cyan(`${PORT}`)}.`);
});
