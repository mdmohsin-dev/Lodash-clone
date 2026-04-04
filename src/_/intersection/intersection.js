export default function intersection(array1, array2) {
    const result = []
    for (const arr of array1) {
        if (array2.includes(arr)) {
            result.push(arr)
        }
    }
    return result
}