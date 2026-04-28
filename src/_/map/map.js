export default function map(collection, iteratee) {
    const result = []

    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            result.push(iteratee(collection[i], i, collection))
        }
    } else {
        for (let key in collection) {
            result.push(iteratee(collection[key], key, collection))
        }g
    }

    return result
}