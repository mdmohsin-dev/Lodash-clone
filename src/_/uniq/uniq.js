export default function uniq(array) {
    const result = []

    for (const arr of array) {
        if (!result.includes(arr)) {
            result.push(arr)
        }
    }
    return result
}
