export default function dropRight(array, n = 1) {
    const newArray = array.slice(0, array.length - n)
    return newArray
}