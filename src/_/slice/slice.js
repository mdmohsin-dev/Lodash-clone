export default function slice(array, startIndex = 0, endIndex = array.length) {
    const result = []
    for (let i = startIndex; i < endIndex; i++) {
        result.push(array[i])
    }
    return result
}
