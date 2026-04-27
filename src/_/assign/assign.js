export default function assign(target, ...sources) {
    for (let i = 0; i < sources.length; i++) {
        const source = sources[i]

        for (let key in source) {
            target[key] = source[key]
        }
    }

    return target
}