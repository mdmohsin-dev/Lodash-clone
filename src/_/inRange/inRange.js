export default function inRange(number, start, end) {
    
    if (end === undefined) {
        end = start;
        start = 0;
    }

    
    if (start > end) {
        [start, end] = [end, start];
    }

    return number >= start && number < end;
}