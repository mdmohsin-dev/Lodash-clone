export default function takeRight(array, n = 1) {
    const result = []

    if(n <=0) return result

    if(n > array.length) return [...array]

    for (let i = array.length - 1; i >= array.length - n; i--) {
        result.push(array[i])
    }

    return result.reverse()
}