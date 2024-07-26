// reverseString.test.ts
import { reverseString } from './reverseString'

describe('Reverse String Test', () => {
  test('Reverse Defined', () => {
    expect(reverseString).toBeDefined()
  })

  test('Hello Reverse', () => {
    expect(reverseString('Hello')).toBe('olleH')
  })

  test('NaN Reverse', () => {
    expect(reverseString('NaN')).toBe('NaN')
  })

  test('Undefined Reverse', () => {
    expect(reverseString('Undefined')).toBe('denifednU')
  })
})
