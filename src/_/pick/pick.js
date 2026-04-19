export default function pick(obj, keys) {
  if (obj == null) return {}

  const result = {}

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]

    if (key in obj) {
      result[key] = obj[key]
    }
  }

  return result
}