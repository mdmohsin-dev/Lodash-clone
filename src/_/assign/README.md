# assign

Assigns own enumerable properties of source objects to the destination object.

## Parameters

- `object` (Object): The destination object  
- `sources` (Object[]): The source objects  

## Returns

- (Object): Returns the modified destination object  

## Example

```js
assign({ a: 1 }, { b: 2 });

output
{ a: 1, b: 2 }

assign({ a: 1 }, { b: 2 }, { a: 3 });

output
{ a: 3, b: 2 }

assign({}, { x: 10, y: 20 });

output
{ x: 10, y: 20 }