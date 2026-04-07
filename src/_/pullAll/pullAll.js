export default function pullAll(array, values) {
    for (let i = array.length - 1; i >= 0; i--) {
        for (const value of values) {
            if (array[i] === value) {
                array.splice(i, 1)
                break
            }
        }
    }
    return array
}