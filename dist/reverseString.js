"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseString = reverseString;
function reverseString(input) {
    let StrLength = input.length || 0;
    let resultString = '';
    for (let i = StrLength - 1; i >= 0; i--) {
        resultString += input.charAt(i);
    }
    return resultString;
}
