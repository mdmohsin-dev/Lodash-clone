export default function take(array, n = 1) {
    const result = []

    if (n <= 0) return result

    if (n > array.length) return [...array]

    for (let i = 0; i < n; i++) {
        result.push(array[i])
    }
    return result
}