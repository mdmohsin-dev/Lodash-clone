
export default function indexOf(array,value) {

    for (let i = 0; i < array.length - 1; i++) {
        if (value === array[i]) {
            return i

        }
    }
    return (-1)

}
