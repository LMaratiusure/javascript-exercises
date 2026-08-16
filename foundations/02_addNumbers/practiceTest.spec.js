const addNumbers = require('./addNumbers.js');

describe('Add Numbers', () => {
    test('adds values of "a and b"', () => {
        expect(addNumbers()).toEqual(2);
    });
});