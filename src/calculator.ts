interface NumberEntry {
  FirstInput: number
  SecondInput: number
}
class Calculator {
  add(
    entryOne: NumberEntry['FirstInput'],
    entryTwo: NumberEntry['SecondInput']
  ): number {
    return entryOne + entryTwo
  }
  subtract(
    entryOne: NumberEntry['FirstInput'],
    entryTwo: NumberEntry['SecondInput']
  ): number {
    return entryOne - entryTwo
  }
  divide(
    entryOne: NumberEntry['FirstInput'],
    entryTwo: NumberEntry['SecondInput']
  ): number {
    if (entryTwo === 0) {
      throw new Error('Division with 0 is not Allowed')
    }
    return entryOne / entryTwo
  }
  multiply(
    entryOne: NumberEntry['FirstInput'],
    entryTwo: NumberEntry['SecondInput']
  ): number {
    return entryOne * entryTwo
  }
}

export default Calculator
