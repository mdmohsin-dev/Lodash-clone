export default function unzip(array) {
    if (!array || array.length === 0) return []

    const result = []
    const length = array[0].length

    for (let i = 0; i < length; i++) {
        const group = array.map(item => item[i])
        result.push(group)
    }

    return result
}
