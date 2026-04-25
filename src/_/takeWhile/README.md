# takeWhile()

Creates a slice of an array with elements taken from the beginning while the predicate returns truthy.

## Parameters

- `array` (Array): The array to inspect  
- `predicate` (Function): The function invoked per iteration  

## Returns

- (Array): Returns the slice of elements  

## Example

```js
takeWhile([1, 2, 3, 4], n => n < 3);

output
[1,2]

takeWhile([2, 4, 6, 7, 8], n => n % 2 === 0);

output
[2,4,6]

takeWhile([1, 3, 5], n => n % 2 === 0);

output
[]