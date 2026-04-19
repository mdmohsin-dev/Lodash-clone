# pick

Creates an object composed of the picked object properties.

## Parameters

- `object` (Object): The source object  
- `paths` (Array): The property paths to pick  

## Returns

- (Object): Returns the new object with selected properties  

## Example

```js
const obj = { a: 1, b: 2, c: 3 };

pick(obj, ['a', 'c']);

output
{ a: 1, c: 3 }