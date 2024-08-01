import { Command } from "commander";
import { NotificationAction, NotificationActionOptions } from "./index";
const pkg = require("../package.json");
const program = new Command();

type NotificationActionCommandOptions = NotificationActionOptions & {
  message: string;
};

program
.version(pkg.version)
  .description("NotiKit CLI - A command line tool for sending notifications")
  .requiredOption(
    "-t, --type <type>",
    "Notification type (currently supports 'wecom')"
  )
  .requiredOption("-bk, --botKey <botKey>", "BotKey for WeCom integration")
  .requiredOption(
    "-m, --message <message>",
    "Content of the notification message"
  )
  .action(async (options: NotificationActionCommandOptions) => {
    await new NotificationAction(options).send(options.message);
  });

program.parse(process.argv);
