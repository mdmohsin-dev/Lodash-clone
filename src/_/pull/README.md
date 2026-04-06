# pull

Removes all given values from an array.

## Parameters

- `array` (Array): The array to modify  
- `values` (...*): The values to remove from the array  

## Returns

- (Array): Returns the modified array

## Example

```js
pull([1, 2, 3, 1, 2, 3], 2, 3);

output
[1, 1]