export default function flattenDepth(array, depth = 1) {
    const result = []

    for (const item of array) {
        if (Array.isArray(item) && depth > 0) {
            const flattened = flattenDepth(item, depth - 1)
            result.push(...flattened)
        }
        else {
            result.push(item)
        }
    }
    return result
}
