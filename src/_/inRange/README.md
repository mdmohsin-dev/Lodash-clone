# inRange

Checks if a number is between `start` and `end` (not including `end`).

## Parameters

- `number` (number): The number to check  
- `start` (number): The start of the range  
- `end` (number): The end of the range  

## Returns

- (boolean): Returns `true` if the number is within the range, otherwise `false`  

## Example

```js
inRange(3, 2, 5);

output
true

inRange(5, 2, 5);

output
false

inRange(1, 2, 5);

output
false

inRange(4, 8, 2);

output
true