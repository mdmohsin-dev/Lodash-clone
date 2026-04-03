export default function compact(array) {
    const truthyValue = array.filter(arr => Boolean(arr))
    return truthyValue
}