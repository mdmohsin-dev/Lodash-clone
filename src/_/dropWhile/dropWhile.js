let isDropping = true;

export default function dropWhile(array,n) {
    const result = []
    for (const arr of array) {
        if (isDropping && arr < n) {
            continue
        }
        else {
            isDropping = false
            result.push(arr)
        }
    }
    return result
}