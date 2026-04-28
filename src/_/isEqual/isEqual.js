export function isEqual(a, b) {
  // same reference or primitive equal
  if (a === b) return true;

  // type check
  if (
    typeof a !== "object" || a === null ||
    typeof b !== "object" || b === null
  ) {
    return false;
  }

  // array or object keys
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key)) return false;

    // recursive compare
    if (!isEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
}