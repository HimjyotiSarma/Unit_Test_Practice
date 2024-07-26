import Capitalize from './capitalize'

describe('Capitalize Test Run', () => {
  test('should Define', () => {
    expect(Capitalize).toBeDefined()
  })
  test('hello Caps', () => {
    expect(Capitalize('hello')).toBe('Hello')
  })
  test('Empty Input', () => {
    expect(Capitalize('')).toBe('')
  })
})
