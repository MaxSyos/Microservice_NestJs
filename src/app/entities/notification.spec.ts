import { Notification } from "./notification";
import { Content } from "./notification-content";

describe('notification', () => {
    it('should be able to create a notification', () => {
        const notification = new Notification({
            recipient_id: 'exemple_recipient_id',
            content: new Content('Nova solicitação de amizade'),
            category: 'social',
            created_at: new Date(),
        })
        expect(notification).toBeTruthy();
    })

})
