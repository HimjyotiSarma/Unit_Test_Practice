"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const analyzeArray = (ArrayInput) => {
    const sum = ArrayInput.reduce((acc, num) => (acc += num), 0);
    const minimum = Math.min(...ArrayInput);
    const maximum = Math.max(...ArrayInput);
    const length = ArrayInput.length;
    return {
        average: sum / length,
        min: minimum,
        max: maximum,
        length: length,
    };
};
exports.default = analyzeArray;
