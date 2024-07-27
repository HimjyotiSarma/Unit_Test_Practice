"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Capitalize = (input) => {
    // Specified return type as string
    return input.charAt(0).toUpperCase() + input.slice(1); // Returning the capitalized string
};
exports.default = Capitalize;
