export default function gt(a, b) {

    if(typeof a !== "number" || typeof b !== "number") return false

    if (a > b) {
        return true
    }
    return false
}
