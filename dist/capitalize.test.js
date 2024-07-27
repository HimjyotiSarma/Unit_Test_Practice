"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const capitalize_1 = __importDefault(require("./capitalize"));
describe('Capitalize Test Run', () => {
    test('should Define', () => {
        expect(capitalize_1.default).toBeDefined();
    });
    test('hello Caps', () => {
        expect((0, capitalize_1.default)('hello')).toBe('Hello');
    });
    test('Empty Input', () => {
        expect((0, capitalize_1.default)('')).toBe('');
    });
});
