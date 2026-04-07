export default function pullAt(array, indexes) {
    const result = []

    for (let i = array.length - 1; i >= 0; i--) {
        for (const index of indexes) {
            if (i == index) {
                result.push(array[i])
                array.splice(i, 1)
            }

        }
    }
    return result.reverse()
}