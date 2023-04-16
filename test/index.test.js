const { grasshoper } = require('../src/index');

describe('grasshoper', () => {
    it('Should return zero when a zero are sended', () => {
        expect(grasshoper(0)).toBe(0);
    });
});