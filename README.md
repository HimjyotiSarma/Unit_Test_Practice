# Assignment: Utility Functions and Unit Tests

This project implements and tests various utility functions in TypeScript. The functions include string manipulation, a basic calculator, a Caesar cipher, and an array analysis tool. The functions are thoroughly tested using Jest.

## Functions Implemented

1. **capitalize**: A function that takes a string and returns it with the first character capitalized.
2. **reverseString**: A function that takes a string and returns it reversed.
3. **calculator**: An object that contains functions for basic operations: add, subtract, divide, and multiply. Each of these functions takes two numbers and returns the correct calculation.
4. **caesarCipher**: A function that takes a string and a shift factor and returns it with each character "shifted". This function correctly handles wrapping from `z` to `a`, case preservation, and non-alphabetical characters.
5. **analyzeArray**: A function that takes an array of numbers and returns an object with the following properties: `average`, `min`, `max`, and `length`.

## Running Test

```typescript
npm run watch
```

## Building the Project

```typescript
tsc
```
