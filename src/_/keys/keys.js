export default function keys(obj) {
    const result = []

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push(key)
        }
    }

    return result
}