export default function repeat(str, count) {

    str = String(str)

    if (count <= 0) return ''

    let result = ''

    for (let i = 0; i < count; i++) {
        result = result + str
    }

    return result
}
