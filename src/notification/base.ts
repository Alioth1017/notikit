export enum NoticeType {
  WEBHOOK = "webhook",
  EMAIL = "email",
  SMS = "sms",
}

export type INotificationOptions =
  | {
      type: NoticeType.WEBHOOK;
      /** 消息通知的 webhook 地址 */
      url: string;
      getData(message: string): any;
    }
  | {
      type: NoticeType.EMAIL | NoticeType.SMS;
    };

export abstract class AbstractNotification {
  protected options: INotificationOptions;
  constructor(options: INotificationOptions) {
    this.options = options;
  }
  abstract send(message: string): void;
}
