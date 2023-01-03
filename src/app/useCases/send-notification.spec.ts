import { Notification } from "../entities/notification";
import { SendNotification } from "./send-notification"

const notificationRepository = {
    async create(notification: Notification) {
        console.log(notification)
    }
}

describe('Send Notification', () => {
    it('should be able to send a notification', async () => {
        const  sendNotification = new SendNotification();

        const { notification } = await sendNotification.execute({
            content:'This a notification',
            category: 'social',
            recipient_id:' exemple_recipient_id'
        });

        expect(notification).toBeTruthy();
    });
});