# values

Creates an array of the own enumerable property values of an object.

## Parameters

- `object` (Object): The object to query  

## Returns

- (Array): Returns an array of property values  

## Example

```js
const obj = { a: 1, b: 2, c: 3 };

values(obj);

output
[1,2,3]

values({ x: 10, y: 20 });

output
[10,20]

values({});

output
[]