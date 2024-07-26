const Capitalize = (input: string): string => {
  // Specified return type as string
  return input.charAt(0).toUpperCase() + input.slice(1) // Returning the capitalized string
}

export default Capitalize
