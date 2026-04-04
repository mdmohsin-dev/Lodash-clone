# findLastIndex()

Returns the index of the last element in an array that satisfies the given predicate function.

## Parameters
- `array` (Array): The array to search  
- `predicate` (Function): The function invoked per iteration  

## Example
```js
findLastIndex([1, 2, 3, 4], n => n > 2);

output
3