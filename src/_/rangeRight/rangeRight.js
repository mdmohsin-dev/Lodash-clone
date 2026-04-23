export default function rangeRight(start, end, step = 1) {
    const result = [];

    if (end === undefined) {
        end = start;
        start = 0;
    }

    for (let i = end - step; i >= start; i -= step) {
        result.push(i);
    }

    return result;
}