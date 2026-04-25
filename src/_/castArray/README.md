# castArray

Casts a value to an array if it is not already one.

## Parameters

- `value` (*): The value to cast  

## Returns

- (Array): Returns the casted array  

## Example

```js
castArray(1);

output
[1]

castArray([1, 2, 3]);

output
[1,2,3]

castArray('abc');

output
['abc']

castArray(null);

output
[null]