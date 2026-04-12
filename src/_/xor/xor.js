export default function xor(array1,array2) {
    const result = []

    for (const item of array1) {
        if (!array2.includes(item)) {
            result.push(item)
        }
    }

    for (const item of array2) {
        if (!array1.includes(item)) {
            result.push(item)
        }
    }
    return result
}
