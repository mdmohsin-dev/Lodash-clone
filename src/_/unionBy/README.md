# unionBy()

Creates a new array of unique values from multiple arrays, using an iteratee to determine uniqueness.

## Parameters

- `arrays` (Array[]): The arrays to inspect  
- `iteratee` (Function): The function invoked per element to generate the criterion  

## Returns

- (Array): Returns the new array of combined unique values  

## Example

```js
unionBy([2.1], [1.2, 2.3], Math.floor); => [2.1, 1.2]

unionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], obj => obj.x); => [{ x: 1 }, { x: 2 }]