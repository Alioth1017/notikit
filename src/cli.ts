import { Command } from "commander";
import { mainFunction } from "./index";

const program = new Command();

program
  .version("0.1.0")
  .description("Notikit CLI")
  .option("-n, --name <name>", "Specify a name")
  .action((options) => {
    mainFunction(options.name);
  });

program.parse(process.argv);
