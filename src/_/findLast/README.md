# findLast

Iterates over elements of a collection from right to left and returns the last element that satisfies the predicate.

## Parameters

- `collection` (Array | Object): The collection to inspect  
- `predicate` (Function): The function invoked per iteration  

## Returns

- (*): Returns the matched element, otherwise `undefined`  

## Example

```js
findLast([1, 2, 3, 4], n => n % 2 === 0);

output
4

findLast(['a', 'b', 'c'], v => v === 'b');

output
'b'

findLast([1, 3, 5], n => n % 2 === 0);

output
undefined