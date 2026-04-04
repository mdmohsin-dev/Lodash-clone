export default function intersectionBy(array1,array2) {
    const result = []
    const same = []
    for (const arr of array2) {
        same.push(Math.floor(arr))
    }
    for (const arr of array1) {
        const res = (Math.floor(arr))
        if (same.includes(res)) {
            result.push(arr)
        }
    }
    return result
}