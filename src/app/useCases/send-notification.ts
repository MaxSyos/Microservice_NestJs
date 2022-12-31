import { Notification } from "../entities/notification";
import { Content } from "../entities/content";

interface SendNotificationRequest {
    recipient_id: string;
    content: string;
    category: string;
}

interface SendNotificationResponse {
    notification: Notification;
}

export class SendNotification {
    async execute(request: SendNotificationRequest): Promise<SendNotificationResponse> {
        const { recipient_id, content, category } = request;

        const notification = new Notification({
            recipient_id,
            content: new Content(content),
            category,
        });

        return {
            notification, 
        }
    }
}