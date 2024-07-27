"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// reverseString.test.ts
const reverseString_1 = require("./reverseString");
describe('Reverse String Test', () => {
    test('Reverse Defined', () => {
        expect(reverseString_1.reverseString).toBeDefined();
    });
    test('Hello Reverse', () => {
        expect((0, reverseString_1.reverseString)('Hello')).toBe('olleH');
    });
    test('NaN Reverse', () => {
        expect((0, reverseString_1.reverseString)('NaN')).toBe('NaN');
    });
    test('Undefined Reverse', () => {
        expect((0, reverseString_1.reverseString)('Undefined')).toBe('denifednU');
    });
});
