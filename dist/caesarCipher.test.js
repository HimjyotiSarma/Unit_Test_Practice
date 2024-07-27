"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const caesarCipher_1 = __importDefault(require("./caesarCipher"));
describe('Caesar Cipher Test', () => {
    test('Should Define', () => {
        expect(caesarCipher_1.default).toBeDefined();
    });
    test('Shift by 3', () => {
        expect((0, caesarCipher_1.default)('xyz', 3)).toBe('abc');
    });
    test('Case preservation Shift by 3', () => {
        expect((0, caesarCipher_1.default)('HeLLo', 3)).toBe('KhOOr');
    });
    test('Test punctuation', () => {
        expect((0, caesarCipher_1.default)('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });
});
