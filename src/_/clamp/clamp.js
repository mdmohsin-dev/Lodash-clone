export default function clamp(number, lower, upper) {
    if (lower > upper) {
        [lower, upper] = [upper, lower];
    }

    if (number < lower) return lower;
    if (number > upper) return upper;

    return number;
}