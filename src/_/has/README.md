# has

Checks if a given path exists as a direct property of an object.

## Parameters

- `object` (Object): The object to inspect  
- `path` (string | Array): The property path to check  

## Returns

- (boolean): Returns `true` if the path exists, otherwise `false`  

## Example

```js
const obj = { a: { b: 2 } };

has(obj, 'a');

output
true

has(obj, 'a.b');

output
true

has(obj, ['a', 'b']);

output
true

has(obj, 'c');

output
false