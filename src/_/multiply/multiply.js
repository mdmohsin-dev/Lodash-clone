export default function multiply(a,b) {
    const numA = Number(a)
    const numB = Number(b)

    if (Number.isNaN(numA) || Number.isNaN(numB)) {
        return NaN
    }
    return numA * numB
}
