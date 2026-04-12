# nth

Gets the element at index `n` of an array. Supports negative index to get elements from the end.

## Parameters

- `array` (Array): The array to query  
- `n` (number): The index of the element to retrieve  

## Returns

- (*): Returns the element at index `n`, or `undefined` if out of bounds

## Example

```js
nth([1, 2, 3, 4], 1);
nth([1, 2, 3, 4], -1);
nth([1, 2, 3, 4], 10);