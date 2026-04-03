export default function diffrence(array, removeList) {
    const result = []
    for (const arr of array) {
        if (removeList.includes(arr)) {
            continue
        }
        else {
            result.push(arr)
        }
    }

    return result
}