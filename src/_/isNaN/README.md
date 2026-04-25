# isNaN

Checks if a value is `NaN`.

## Parameters

- `value` (*): The value to check  

## Returns

- (boolean): Returns `true` if the value is `NaN`, otherwise `false`  

## Example

```js
isNaN(NaN);

output
true

isNaN('hello');

output
false

isNaN(123);

output
false

isNaN(undefined);

output
false