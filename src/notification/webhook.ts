import axios from "axios";
import { AbstractNotification, NoticeType } from "./base";

// 实现WecomNotification类
export class WebhookNotification extends AbstractNotification {
  async send(message: string): Promise<boolean> {
    const options = this.options;

    if (options.type !== NoticeType.WEBHOOK) {
      return false;
    }

    try {
      const { type, getData, ...restOptions } = options;
      const response = await axios.request({
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        ...restOptions,
        data: getData(message),
      });
      console.log("Notification sent successfully:", response.data);
      return true;
    } catch (error) {
      console.error("Failed to send notification:", error);
      return false;
    }
  }
}
