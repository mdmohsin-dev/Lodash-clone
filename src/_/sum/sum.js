export function sum(arr) {
  if (!Array.isArray(arr)) return 0

  let total = 0

  for (let i = 0; i < arr.length; i++) {
    const val = Number(arr[i])

    if (!Number.isNaN(val)) {
      total += val
    }
  }

  return total
}