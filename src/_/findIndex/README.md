# findIndex()

Returns the index of the first element in an array that satisfies the given predicate function.

## Parameters
- `array` (Array): The array to search  
- `predicate` (Function): The function invoked per iteration  

## Example
```js
findIndex([1, 2, 3, 4], n => n > 2);

output
2