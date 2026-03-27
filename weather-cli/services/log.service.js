import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
  console.error(chalk.bgRed("ERROR") + " " + error);
};

const printSuccess = (message) => {
  console.log(chalk.bgGreen("SUCCESS") + " " + message);
};

const printHelp = () => {
  console.log(dedent`${chalk.bgCyan("HELP")}
    Without parameters - get weather  
    -s [CITY] to save city
    -h for help
    -t [API_KEY] to save token
    `);
};

export { printError, printSuccess, printHelp };
