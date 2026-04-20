export default function subtract(a = 0, b = 0) {
    const numA = Number(a)
    const numB = Number(b)

    if (Number.isNaN(numA) || Number.isNaN(numB)) {
        return NaN
    }
    return numA - numB
}