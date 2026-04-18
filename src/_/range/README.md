# range

Creates an array of numbers progressing from `start` up to, but not including, `end`. The progression can be incremented or decremented using a `step` value.

## Parameters

- `start` (number): The start of the range  
- `end` (number): The end of the range (not included)  
- `step` (number): The value to increment or decrement by  

## Returns

- (Array): Returns the array of numbers  

## Example

```js
range(4); => [0,1,2,3]

range(1,5); => [1,2,3,4]

range(0,20,5); => [0,5,10,15]

range(5,1,-1); => [5,4,3,2]