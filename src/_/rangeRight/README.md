# rangeRight

Creates an array of numbers progressing from `start` up to, but not including, `end`, in reverse order.

## Parameters

- `start` (number): The start of the range  
- `end` (number): The end of the range (not included)  
- `step` (number): The value to increment or decrement by  

## Returns

- (Array): Returns the array of numbers in reverse order  

## Example

```js
rangeRight(4); => [3,2,1,0]

rangeRight(1,5); => [4,3,2,1]

rangeRight(0,20,5); => [15,10,5,0]

rangeRight(5,1,-1); => [2,3,4,5]