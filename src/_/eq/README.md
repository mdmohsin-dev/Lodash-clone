# eq

Checks if two values are equal using strict comparison.

## Parameters

- `value1` (*): The first value to compare  
- `value2` (*): The second value to compare  

## Returns

- (boolean): Returns `true` if both values are equal, else `false`

## Example

```js
eq(10, 10);
eq("a", "a");
eq(1, "1");
eq(NaN, NaN);