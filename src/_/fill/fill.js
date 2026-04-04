export default function fill(array,replace) {
    const result = []
    for (let i = 0; i <array.length; i++ ) {
        result.push(replace)
    }
    return result
}