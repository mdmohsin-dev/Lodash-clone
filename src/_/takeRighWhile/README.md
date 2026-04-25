# takeRightWhile()

Creates a slice of an array with elements taken from the end while the predicate returns truthy.

## Parameters

- `array` (Array): The array to inspect  
- `predicate` (Function): The function invoked per iteration  

## Returns

- (Array): Returns the slice of elements  

## Example

```js
takeRightWhile([1, 2, 3, 4], n => n > 2);

output
[3,4]

takeRightWhile([2, 4, 6, 7, 8], n => n % 2 === 0);

output
[8]

takeRightWhile([1, 3, 5], n => n % 2 === 0);

output
[]