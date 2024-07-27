"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Calculator {
    add(entryOne, entryTwo) {
        return entryOne + entryTwo;
    }
    subtract(entryOne, entryTwo) {
        return entryOne - entryTwo;
    }
    divide(entryOne, entryTwo) {
        if (entryTwo === 0) {
            throw new Error('Division with 0 is not Allowed');
        }
        return entryOne / entryTwo;
    }
    multiply(entryOne, entryTwo) {
        return entryOne * entryTwo;
    }
}
exports.default = Calculator;
