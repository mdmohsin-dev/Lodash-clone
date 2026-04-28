# isEmpty

Checks if a value is empty.

## Parameters

- `value` (*): The value to check  

## Returns

- (boolean): Returns `true` if the value is empty, otherwise `false`  

## Example

```js
isEmpty([]);

output
true

isEmpty({});

output
true

isEmpty('');

output
true

isEmpty([1, 2]);

output
false

isEmpty({ a: 1 });

output
false