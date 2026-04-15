# differenceWith

Creates a new array of values from the first array that are not included in the other arrays, using a comparator function.

## Parameters

- `array` (Array): The array to inspect  
- `values` (Array): The values to exclude  
- `comparator` (Function): The comparator invoked per element  

## Returns

- (Array): Returns the new filtered array

## Example

```js
const objects = [{ x: 1 }, { x: 2 }];
const others = [{ x: 1 }];

differenceWith(objects, others, (a, b) => a.x === b.x);

output
[{ x: 2 }]