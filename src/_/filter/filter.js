export function filter(array, predicate) {
  if (!Array.isArray(array)) return []

  const result = []

  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      result.push(array[i])
    }
  }

  return result
}