// tests/analyzeArray.test.ts
import analyzeArray from '../src/analyzeArray'

describe('Analyze Array Test', () => {
  test('should Define', () => {
    expect(analyzeArray).toBeDefined()
  })

  test('Four Average of Sum 100', () => {
    expect(analyzeArray([10, 20, 30, 40])).toEqual({
      average: 25,
      min: 10,
      max: 40,
      length: 4,
    })
  })

  test('Empty Array', () => {
    expect(analyzeArray([])).toEqual({
      average: NaN,
      min: Infinity,
      max: -Infinity,
      length: 0,
    })
  })

  test('Single Element Array', () => {
    expect(analyzeArray([5])).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1,
    })
  })

  test('Negative Numbers', () => {
    expect(analyzeArray([-10, -20, -30, -40])).toEqual({
      average: -25,
      min: -40,
      max: -10,
      length: 4,
    })
  })

  test('Mixed Positive and Negative Numbers', () => {
    expect(analyzeArray([-10, 20, -30, 40])).toEqual({
      average: 5,
      min: -30,
      max: 40,
      length: 4,
    })
  })

  test('Large Numbers', () => {
    expect(
      analyzeArray([1000000000, 2000000000, 3000000000, 4000000000])
    ).toEqual({
      average: 2500000000,
      min: 1000000000,
      max: 4000000000,
      length: 4,
    })
  })
})
