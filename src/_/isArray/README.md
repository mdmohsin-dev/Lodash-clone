# isArray

Checks if a value is an array.

## Parameters

- `value` (*): The value to check  

## Returns

- (boolean): Returns `true` if the value is an array, else `false`

## Example

```js
isArray([1, 2, 3]); => true
isArray("hello");   => false
isArray({ a: 1 });  => false