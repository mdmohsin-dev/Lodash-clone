export default function zip(...arrays) {
    const result = []
    const maxLength = Math.max(...arrays.map(array => array.length))

    for (let i = 0; i < maxLength; i++) {
        const group = arrays.map(array => array[i])
        result.push(group)
    }
    return result
}