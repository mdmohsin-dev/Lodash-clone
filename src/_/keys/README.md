# keys

Creates an array of the own enumerable property names of an object.

## Parameters

- `object` (Object): The object to query  

## Returns

- (Array): Returns an array of property names  

## Example

```js
const obj = { a: 1, b: 2, c: 3 };

keys(obj);

output
['a','b','c']

keys({ x: 10, y: 20 });

output
['x','y']

keys({});

output
[]