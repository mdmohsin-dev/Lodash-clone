# flattenDepth

Flattens an array up to the specified depth.

## Parameters

- `array` (Array): The array to flatten  
- `depth` (number): The maximum recursion depth  

## Returns

- (Array): Returns the new flattened array  

## Example

```js
flattenDepth([1, [2, [3, [4]], 5]], 1); => [1, 2, [3, [4]], 5]

flattenDepth([1, [2, [3, [4]], 5]], 2); => [1, 2, 3, [4], 5]

flattenDepth([1, [2, [3, [4]], 5]], 3); => [1, 2, 3, 4, 5]