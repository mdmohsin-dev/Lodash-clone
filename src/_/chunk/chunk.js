const result = []

export default function chunk(array, size) {
    for (let arr = 0; arr < array.length; arr += size) {
        const sliceArray = array.slice(arr, arr + size)
        result.push(sliceArray)
    }

    return result
}
