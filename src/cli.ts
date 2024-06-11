import { Command } from "commander";
import { NotificationAction, NotificationActionOptions } from "./index";
const program = new Command();

program
  .version("0.1.0")
  .description("NotiKit CLI - A command line tool for sending notifications")
  .requiredOption("-t, --type <type>", "Notification type (currently supports 'wecom')")
  .requiredOption("-bk, --botKey <botKey>", "BotKey for WeCom integration")
  .requiredOption("-m, --message <message>", "Content of the notification message")
  .action((options: NotificationActionOptions) => {
    new NotificationAction(options).send();
  });

program.parse(process.argv);