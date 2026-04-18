export default function range(start, end, step = 1) {
    if (end === undefined) {
        end = start
        start = 0
    }

    const result = []

    if (step === 0) return result

    if (step > 0) {
        for (let i = start; i < end; i += step) {
            result.push(i)
        }
    } else {
        for (let i = start; i > end; i += step) {
            result.push(i)
        }
    }

    return result
}