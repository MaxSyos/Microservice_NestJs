import { Content } from "./notification-content"

describe('notification-content', () => {
    it('should be able to create a notification content', () => {
        const content = new Content('Você recebeu uma nova solicitação de amizade!')
        expect(content).toBeTruthy();
    })

    it('should not be able to create a notification content with 5 caracters', () => {
        expect(() => new Content('aaa')).toThrow();
    })

    it('should not be able to create a notification content with 5 caracters', () => {
        expect(() => new Content('a'.repeat(241))).toThrow();
    }) 

})