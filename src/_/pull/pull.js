const array = [1, 2, 3, 4, 5, 6,2]

export default function pull(...values) {
    for (let i = array.length; i > 0; i--) {
        for (const value of values) {
            if (array[i] === value) {
                array.splice(i, 1)
                break
            }
        }
    }
    return array
}
console.log(pull(2, 3))