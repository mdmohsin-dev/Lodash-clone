# every

Checks if all elements in a collection satisfy the predicate.

## Parameters

- `collection` (Array | Object): The collection to inspect  
- `predicate` (Function): The function invoked per iteration  

## Returns

- (boolean): Returns `true` if all elements match, otherwise `false`  

## Example

```js
every([2, 4, 6], n => n % 2 === 0);

output
true

every([2, 3, 6], n => n % 2 === 0);

output
false

every(['aa', 'bb'], str => str.length === 2);

output
true