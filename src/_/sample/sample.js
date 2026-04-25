export function sample(array) {
  if (!array || array.length === 0) {
    return undefined
  }

  const index = Math.floor(Math.random() * array.length)
  return array[index]
}