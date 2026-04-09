export default function without(array, ...value) {
    const result = []
    for (const item of array) {
        if (!value.includes(item)) {
            result.push(item)
        }
    }
    return result
}