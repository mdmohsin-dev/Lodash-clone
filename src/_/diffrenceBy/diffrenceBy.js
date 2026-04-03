export default function diffrenceBy(array, removeList) {
    const result = []
    const removeResult = []

    for (const remove of removeList) {
        const res = Math.floor(remove)
        removeResult.push(res)
    }

    for (const arr of array) {
        const res = Math.floor(arr)
        if (removeResult.includes(res)) {
            continue
        }
        else {
            result.push(arr)
        }
    }

    return result

}
