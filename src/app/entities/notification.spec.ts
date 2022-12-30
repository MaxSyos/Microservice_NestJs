import { Notification } from "./notification";
import { Content } from "./notification-content";

describe('notification', () => {
    it('should be able to create a notification', () => {
        const notification = new Notification({
            content: new Content('Nova solicitação de amizade'),
            category: 'social',
            recipient_id: 'exemple recipient_id',
            created_at: new Date(),
        })
        expect(notification).toBeTruthy();
    })

})
