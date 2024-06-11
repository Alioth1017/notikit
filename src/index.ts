import { INotificationOptions, NoticeType } from "./notification/base";
import { WebhookNotification } from "./notification/webhook";

export type NotificationActionOptions = {
  type: "wecom";
  botKey: string;
};

export class NotificationAction {
  constructor(private options: NotificationActionOptions) {}
  send(message: string) {
    if (this.options.type === "wecom") {
      this.wecomNotice(this.options.botKey, message);
    } else {
      console.error("Unsupported notification type");
    }
  }
  private wecomNotice(botKey: string, message: string) {
    const options: INotificationOptions = {
      type: NoticeType.WEBHOOK,
      url: `https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=${botKey}`,
      getData: (message: string) => ({
        msgtype: "markdown",
        markdown: {
          content: message,
        },
      }),
    };
    const wecomNotification = new WebhookNotification(options);
    wecomNotification.send(message);
  }
}
