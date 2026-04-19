export default function capitalize(value) {
    if (value == null) return ''

    const str = String(value)

    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}