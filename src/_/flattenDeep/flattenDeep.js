export default function flattenDeep(array) {
    const result = [];

    for (const item of array) {
        if (Array.isArray(item)) {
            const flattened = flattenDeep(item);
            result.push(...flattened);
        } else {
            result.push(item);
        }
    }

    return result;
}