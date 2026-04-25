export function find(array, predicate) {
  if (!Array.isArray(array)) return undefined

  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      return array[i]
    }
  }

  return undefined
}