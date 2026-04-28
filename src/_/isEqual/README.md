# isEqual

Performs a deep comparison between two values to determine if they are equivalent.

## Parameters

- `value` (*): The first value to compare  
- `other` (*): The second value to compare  

## Returns

- (boolean): Returns `true` if the values are equivalent, otherwise `false`  

## Example

```js
isEqual({ a: 1 }, { a: 1 });

output
true

isEqual({ a: 1 }, { a: 2 });

output
false

isEqual([1, 2], [1, 2]);

output
true

isEqual([1, 2], [2, 1]);

output
false