export default function defaultTo(value, defaultValue) {
    if (value == null || value !== value) {
        return defaultValue;
    }
    return value;
}