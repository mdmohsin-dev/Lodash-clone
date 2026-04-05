

export default function faltten(array) {
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
