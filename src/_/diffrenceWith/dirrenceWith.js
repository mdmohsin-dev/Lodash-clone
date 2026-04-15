export default function differenceWith(array, values, comparator) {
  if (!Array.isArray(array) || !Array.isArray(values)) return [];

  const result = [];

  for (let i = 0; i < array.length; i++) {
    let isMatch = false;

    for (let j = 0; j < values.length; j++) {
      if (comparator(array[i], values[j])) {
        isMatch = true;
        break;
      }
    }

    if (!isMatch) {
      result.push(array[i]);
    }
  }

  return result;
}