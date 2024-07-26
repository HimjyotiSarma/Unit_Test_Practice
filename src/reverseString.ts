export function reverseString(input: string): string {
  let StrLength: number = input.length || 0
  let resultString: string = ''
  for (let i = StrLength - 1; i >= 0; i--) {
    resultString += input.charAt(i)
  }
  return resultString
}
