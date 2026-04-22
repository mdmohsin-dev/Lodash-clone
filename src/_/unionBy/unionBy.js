export default function unionBy(array1, array2) {
    const result = []
    const seen = []

    const combined = [...array1, ...array2]

    for (const item of combined) {
        const res = Math.floor(item)

        if (seen.includes(res)) {
            continue
        } else {
            seen.push(res)
            result.push(item)
        }
    }

    return result
}