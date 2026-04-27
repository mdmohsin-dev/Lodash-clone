# some()

Checks if at least one element in a collection satisfies the predicate.

## Parameters

- `collection` (Array | Object): The collection to inspect  
- `predicate` (Function): The function invoked per iteration  

## Returns

- (boolean): Returns `true` if any element matches, otherwise `false`  

## Example

```js
some([1, 2, 3, 4], n => n > 3);

output
true

some([1, 2, 3], n => n > 5);

output
false

some(['a', 'bb', 'c'], str => str.length > 1);

output
true