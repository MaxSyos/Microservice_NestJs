import { Notification } from "../entities/notification";
import { Content } from "../entities/content";
import { NotificationsRepository } from "../repositories/notifications-repository";

interface SendNotificationRequest {
    recipient_id: string;
    content: string;
    category: string;
}

interface SendNotificationResponse {
    notification: Notification;
}

export class SendNotification {
    constructor (private notificationsRepository = NotificationsRepository) {}

    async execute(request: SendNotificationRequest): Promise<SendNotificationResponse> {
        const { recipient_id, content, category } = request;

        const notification = new Notification({
            recipient_id,
            content: new Content(content),
            category,
        });

        await this.notificationsRepository.create(notification);

        return {
            notification, 
        }
    }
}