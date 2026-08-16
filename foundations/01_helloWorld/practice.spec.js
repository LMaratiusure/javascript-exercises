const helloWorld = require('./helloWorld.js');

describe('Hello yo World', function() {
    test('says "Hello, World!"', function() {
        expect(helloWorld()).toEqual('Hello, World!');
    });
});