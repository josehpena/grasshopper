const { grasshoper } = require('../src/index');

describe('grasshoper', () => {
    it('Should return zero when a zero are sended', () => {
        expect(grasshoper(0)).toBe(0);
    });

    it('Should return number one when the number one is sent', () => {
        expect(grasshoper(1)).toBe(1);
    });

    it('When the number two is sent, calculate the sum of 2 houses progressively starting from 1', () =>{
        expect(grasshoper(2)).toBe(3);
    });
});