export default function lte(a, b) {

    if (typeof a !== "number" || typeof b !== "number") return false

    return a <= b
}
