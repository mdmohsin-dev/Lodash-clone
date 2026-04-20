export default function mean(array) {
    if (!Array.isArray(array) || array.length === 0) {
        return NaN
    }

    let total = 0
    let count = 0

    for (const item of array) {
        if (typeof item !== 'number' || Number.isNaN(item)) continue

        total += item
        count++
    }

    return count === 0 ? NaN : total / count
}
