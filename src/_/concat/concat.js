
export default function concact(array) {
    const result = []
    for (const arr of array) {
        if (Array.isArray(arr)) {
            result.push(...arr)
        }
        else {
            result.push(arr)
        }

    }
    return result
}