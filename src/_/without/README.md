# without

Creates a new array excluding all given values.

## Parameters

- `array` (Array): The array to inspect  
- `values` (...*): The values to exclude  

## Returns

- (Array): Returns the new filtered array

## Example

```js
without(['a', 2, 3, 4], 'a', 3)

output
[2,4]