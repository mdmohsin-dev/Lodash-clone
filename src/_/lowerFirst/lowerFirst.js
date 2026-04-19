export function lowerFirst(value) {
  if (value == null) return ''
  
  const str = String(value)
  if (str.length === 0) return ''
  
  return str.charAt(0).toLowerCase() + str.slice(1)
}