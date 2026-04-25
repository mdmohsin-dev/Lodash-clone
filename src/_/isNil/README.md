# isNil

Checks if a value is `null` or `undefined`.

## Parameters

- `value` (*): The value to check  

## Returns

- (boolean): Returns `true` if the value is `null` or `undefined`, otherwise `false`  

## Example

```js
isNil(null);

output
true

isNil(undefined);

output
true

isNil(0);

output
false

isNil('');

output
false