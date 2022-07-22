import chalk from "chalk";
import app from "./app.js";
import "dotenv/config";

const PORT = +process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`${chalk.green('SERVER-ON')}: Listening on port ${chalk.cyan(`${PORT}`)}.`);
});
