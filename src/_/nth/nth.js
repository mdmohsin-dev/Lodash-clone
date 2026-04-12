export default function nth(array, n) {

    if (!Array.isArray(array)) return undefined;

    let index = n

    if (n < 0) {
        index = array.length + n
    }

    if (index < 0 || index >= array.length) {
        return undefined;
    }

    return array[index]
}
