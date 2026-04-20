export default function zipObject(props, values) {
    if (!Array.isArray(props) || !Array.isArray(values)) {
        return {}
    }

    const result = {}

    for (let i = 0; i < props.length; i++) {
        const key = props[i]
        result[key] = values[i]
    }

    return result
}