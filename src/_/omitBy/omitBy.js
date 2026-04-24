// omitBy.js
export default function omitBy(obj, predicate) {
    if (obj == null) return {};

    const result = {};

    for (const [key, value] of Object.entries(obj)) {
        if (!predicate(value, key)) {
            result[key] = value;
        }
    }

    return result;
}