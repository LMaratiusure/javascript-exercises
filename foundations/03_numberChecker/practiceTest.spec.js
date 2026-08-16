const numberChecker = require('./numberChecker.js');

describe('Number Checker', () => {
    test('outputs true when number is 1000', () => {
        expect(numberChecker(1000)).toEqual(true);
    });
    test('outputs true when number is 10', () => {
        expect(numberChecker(10)).toEqual(true);
    });
});