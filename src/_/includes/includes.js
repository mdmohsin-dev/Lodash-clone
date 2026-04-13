export default function includes(collection, value) {

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      const item = collection[i];

      if (item === value || (item !== item && value !== value)) {
        return true;
      }
    }
    return false;
  }

  
  if (typeof collection === "object" && collection !== null) {
    for (const key in collection) {
      const item = collection[key];

      if (item === value || (item !== item && value !== value)) {
        return true;
      }
    }
    return false;
  }

  
  if (typeof collection === "string") {
    if (value === "") return true;

    for (let i = 0; i <= collection.length - value.length; i++) {
      let match = true;

      for (let j = 0; j < value.length; j++) {
        if (collection[i + j] !== value[j]) {
          match = false;
          break;
        }
      }

      if (match) return true;
    }

    return false;
  }

  
  return false;
}