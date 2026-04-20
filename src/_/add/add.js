export default function add(a, b) {
  const numA = Number(a)
  const numB = Number(b)

  if (!Number.isFinite(numA) || !Number.isFinite(numB)) {
    return NaN
  }

  return numA + numB
}