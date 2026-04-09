# isObject

Checks if a value is an object.

## Parameters

- `value` (*): The value to check  

## Returns

- (boolean): Returns `true` if the value is an object, else `false`

## Example

```js
isObject({ a: 1 });   => true
isObject([1, 2, 3]);  => true
isObject(null);       => false
isObject("hello");    => false