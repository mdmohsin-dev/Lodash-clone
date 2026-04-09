export default function size(collection) {

    if (collection == null) {
        return 0
    }

    if (typeof collection === 'string' || Array.isArray(collection)) {
        return collection.length
    }

    if (typeof collection === 'object') {
        return Object.keys(collection).length
    }

    return 0

}

