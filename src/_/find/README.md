# find

Iterates over elements of a collection from left to right and returns the first element that satisfies the predicate.

## Parameters

- `collection` (Array | Object): The collection to inspect  
- `predicate` (Function): The function invoked per iteration  

## Returns

- (*): Returns the matched element, otherwise `undefined`  

## Example

```js
find([1, 2, 3, 4], n => n % 2 === 0);

output
2

find(['a', 'b', 'c'], v => v === 'b');

output
'b'

find([1, 3, 5], n => n % 2 === 0);

output
undefined