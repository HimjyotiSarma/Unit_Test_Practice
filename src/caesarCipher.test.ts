import CaesarCipher from './caesarCipher'

describe('Caesar Cipher Test', () => {
  test('Should Define', () => {
    expect(CaesarCipher).toBeDefined()
  })
  test('Shift by 3', () => {
    expect(CaesarCipher('xyz', 3)).toBe('abc')
  })
  test('Case preservation Shift by 3', () => {
    expect(CaesarCipher('HeLLo', 3)).toBe('KhOOr')
  })
  test('Test punctuation', () => {
    expect(CaesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
  })
})
