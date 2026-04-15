export default function remove(array, predicate) {
  const removed = [];

  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      removed.push(array[i]);
      
      array.splice(i, 1);

      i--;
    }
  }

  return removed;
}