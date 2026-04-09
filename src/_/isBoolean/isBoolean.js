export default function isBoolean(value) {
    return typeof value === 'boolean' || value instanceof Boolean
}
