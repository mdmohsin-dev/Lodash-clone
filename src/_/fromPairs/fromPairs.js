const pairs = [['a', 1], ['b', 2]]

export default function fromPairs() {
    const result = {}
  for(const pair of pairs){
    
    const [key,value]=pair
    result[key] = value
  }
  console.log(result)
}
fromPairs()

