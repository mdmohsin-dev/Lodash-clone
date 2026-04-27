# zip()

Creates an array of grouped elements, where the first element contains the first elements of the given arrays, the second contains the second elements, and so on.

## Parameters

- `arrays` (Array[]): The arrays to process  

## Returns

- (Array): Returns the new array of grouped elements  

## Example

```js
zip([1, 2], [3, 4], [5, 6]);

output
[[1,3,5],[2,4,6]]

zip(['a', 'b'], [1, 2, 3]);

output
[['a',1],['b',2],[undefined,3]]

zip([], []);

output
[]