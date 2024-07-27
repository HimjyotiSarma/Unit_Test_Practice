"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculator_1 = __importDefault(require("./calculator"));
let newCalculation = new calculator_1.default();
describe('Calculator Test', () => {
    test('Should Define', () => {
        expect(newCalculation).toBeDefined();
    });
    test('Add Number', () => {
        expect(newCalculation.add(10, 20)).toBe(30);
    });
    test('Substract Number', () => {
        expect(newCalculation.subtract(20, 2)).toBe(18);
    });
    test('Multiply Number', () => {
        expect(newCalculation.multiply(20, 5)).toBe(100);
    });
    test('Divide Non zero Number', () => {
        expect(newCalculation.divide(20, 2)).toBe(10);
    });
    test('Divide By Zero', () => {
        expect(() => newCalculation.divide(10, 0)).toThrow('Division with 0 is not Allowed');
    });
});
