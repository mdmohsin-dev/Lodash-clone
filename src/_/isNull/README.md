# isNull

Checks if a value is `null`.

## Parameters

- `value` (*): The value to check  

## Returns

- (boolean): Returns `true` if the value is `null`, otherwise `false`  

## Example

```js
isNull(null);

output
true

isNull(undefined);

output
false

isNull(0);

output
false

isNull('');

output
false