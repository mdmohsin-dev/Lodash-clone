export function upperFirst(value) {
  if (value == null) return ''
  
  const str = String(value)
  if (str.length === 0) return ''
  
  return str.charAt(0).toUpperCase() + str.slice(1)
}