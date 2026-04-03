# difference()

Returns a new array containing values from the first array that are not present in the other array(s).

## Parameters
- `array` (Array): The source array  
- `...values` (Array): Arrays of values to exclude  

## Example
```js
difference([1, 2, 3, 4], [2, 4]);

output
[1, 3]