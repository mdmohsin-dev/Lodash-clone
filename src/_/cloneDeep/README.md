# cloneDeep

Creates a deep clone of a value.

## Parameters

- `value` (*): The value to recursively clone  

## Returns

- (*): Returns the deep cloned value  

## Example

```js
const obj = { a: 1, b: { c: 2 } };

const cloned = cloneDeep(obj);

cloned.b.c = 10;

output
obj => { a: 1, b: { c: 2 } }
cloned => { a: 1, b: { c: 10 } }