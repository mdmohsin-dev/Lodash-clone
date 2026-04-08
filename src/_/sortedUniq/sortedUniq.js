export default function sortedUniq(array) {
    const result = []

    if (array.length === 0) return result

    result.push(array[0])

    for (let i = 1; i < array.length; i++) {
        if (array[i] !== array[i - 1]) {
            result.push(array[i])
        }
    }
    return result
}
