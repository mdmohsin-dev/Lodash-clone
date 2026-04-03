# differenceBy()

Creates a new array of values from the first array, excluding values that match (after transformation) with values from the other array.

## Parameters
- `array` (Array): The source array  
- `values` (Array): The array of values to exclude  
- `iteratee` (Function | string): The function or property used to transform values before comparison  

## Example
```js
differenceBy([1.2, 2.2, 2.7], [2.2]);

output
[1.2]
