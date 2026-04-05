export default function fromPairs(pairs) {
    const result = {}
  for(const pair of pairs){
    
    const [key,value]=pair
    result[key] = value
  }
  return result
}

