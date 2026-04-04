
let isDropping = true

export default function dropRightWhite(array) {
  const result = []
  for (let i = array.length - 1; i >= 0; i--) {
    if (isDropping && array[i].active === true) {
      continue
    }
    else {
      isDropping = false
      result.push(array[i])
    }
  }
  return result.reverse()
}