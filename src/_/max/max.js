export default function max(array) {
    if (!Array.isArray(array) || array.length === 0) return undefined

    let maxNum = undefined

    for (const item of array) {
        if (typeof item !== "number" || item !== item) continue

        if (maxNum === undefined ||maxNum < item) {
            maxNum = item
        }
    }

    return maxNum
}
