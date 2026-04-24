# isUndefined

Checks if a value is `undefined`.

## Parameters

- `value` (*): The value to check  

## Returns

- (boolean): Returns `true` if the value is `undefined`, otherwise `false`  

## Example

```js
isUndefined(undefined);

output
true

isUndefined(null);

output
false

isUndefined(0);

output
false

let a;
isUndefined(a);

output
true