export default function min(array) {
    if (!Array.isArray(array) || array.length === 0) return undefined

    let minNum = undefined

    for (const item of array) {
        if (typeof item !== "number" || item !== item) continue

        if (minNum === undefined || minNum > item) {
            minNum = item
        }
    }

    return minNum
}
