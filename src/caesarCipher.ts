const CaesarCipher = (inputStr: string, shiftBy: number): string => {
  let resultStr: string = ''

  for (let i = 0; i < inputStr.length; i++) {
    let charCode = inputStr.charCodeAt(i)
    if (charCode >= 97 && charCode <= 122) {
      resultStr += String.fromCharCode(((charCode - 97 + shiftBy) % 26) + 97)
    } else if (charCode >= 65 && charCode <= 90) {
      resultStr += String.fromCharCode(((charCode - 65 + shiftBy) % 26) + 65)
    } else {
      resultStr += String.fromCharCode(charCode)
    }
  }
  return resultStr
}

export default CaesarCipher
