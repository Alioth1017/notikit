import axios from "axios";
import { AbstractNotification, NoticeType } from "./base";

// 实现WecomNotification类
export class WebhookNotification extends AbstractNotification {
  async send(message: string): Promise<void> {
    const options = this.options;

    if (options.type !== NoticeType.WEBHOOK) {
      return;
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
    } catch (error) {
      console.error("Failed to send notification:", error);
    }
  }
}
