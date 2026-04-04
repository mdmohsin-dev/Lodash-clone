# dropWhile()

Creates a slice of an array, excluding elements from the beginning while the predicate returns truthy.

## Parameters
- `array` (Array): The array to process  
- `predicate` (Function): The function invoked per iteration  

## Example
```js
dropWhile([1, 2, 3, 4], n => n < 3);

output
[3, 4]