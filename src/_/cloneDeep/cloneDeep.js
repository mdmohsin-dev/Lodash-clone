export function cloneDeep(value) {

    if (value === null || typeof value !== "object") {
        return value;
    }


    if (Array.isArray(value)) {
        return value.map(item => cloneDeep(item));
    }


    const result = {};
    for (let key in value) {
        result[key] = cloneDeep(value[key]);
    }

    return result;
}