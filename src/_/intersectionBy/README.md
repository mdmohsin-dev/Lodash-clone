# intersectionBy()

Creates an array of values that are present in all given arrays, using an iteratee to transform values before comparison.

## Parameters
- `...arrays` (Array): The arrays to inspect  
- `iteratee` (Function | string): The function or property used to transform values  

## Example
```js
intersectionBy([2.1, 1.2], [2.3, 3.4]);

output
[2.1]

