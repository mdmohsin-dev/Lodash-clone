export default function startsWith(str, target, position = 0) {
    if (str == null) return false;

    const string = String(str);
    const search = String(target);

    
    return string.slice(position, position + search.length) === search;
}