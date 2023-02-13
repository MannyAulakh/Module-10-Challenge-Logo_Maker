const Shape = require('../lib/shapes');

describe('shape', () => {
    describe('Error 1', () => {
        it('Return error: more than 3 characters', () => {
            const result = new Error('Text cannot be greater than 3 characters')
            const sha = () => new Shape("SVGGG","Black","Black");
            expect(sha).toThrow(result);
        });
    })
    describe('Error 2', () => {
        it('Return error: no text', () => {
            const result = new Error('Text cannot be empty')
            const sha = () => new Shape("","Black","Black");
            expect(sha).toThrow(result);
        });
    })
    describe('Error 3', () => {
        it('Return error: no render', () => {
            const result = new Error('Shape does not have a render() method')
            const sha = () => new Shape("SVG","Black","Black").render();
            expect(sha).toThrow(result);
        });
    })
})