interface AnalyzeFormat {
  average: number
  min: number
  max: number
  length: number
}
const analyzeArray = (ArrayInput: Array<number>): AnalyzeFormat => {
  const sum = ArrayInput.reduce((acc, num) => (acc += num), 0)
  const minimum = Math.min(...ArrayInput)
  const maximum = Math.max(...ArrayInput)
  const length = ArrayInput.length
  return {
    average: sum / length,
    min: minimum,
    max: maximum,
    length: length,
  }
}

export default analyzeArray
