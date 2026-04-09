# isNumber

Checks if a value is a number.

## Parameters

- `value` (*): The value to check  

## Returns

- (boolean): Returns `true` if the value is a number, else `false`

## Example

```js
isNumber(10);    => true
isNumber(3.14);  => true
isNumber("10");  => false
isNumber(NaN);   => true