# omit

Creates an object composed of the own properties of `object` that are not omitted.

## Parameters

- `object` (Object): The source object  
- `paths` (Array): The property paths to omit  

## Returns

- (Object): Returns the new object without the omitted properties  

## Example

```js
const obj = { a: 1, b: 2, c: 3 };

omit(obj, ['a']);

output
{ b: 2, c: 3 }