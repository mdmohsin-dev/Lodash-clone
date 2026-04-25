export default function isNaN(value) {
  return typeof value === 'number' && value !== value
}