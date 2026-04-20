export default function divide(a, b) {
  const numA = Number(a)
  const numB = Number(b)
 
  if (!Number.isFinite(numA) || !Number.isFinite(numB)) {
    return NaN
  }

  
  if (numB === 0) {
    return NaN
  }

  return numA / numB
}