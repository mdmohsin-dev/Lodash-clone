export default function values(obj) {
    const result = []

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push(obj[key])
        }
    }

    return result
}