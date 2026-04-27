# map

Creates a new array by applying a function to each element of a collection.

## Parameters

- `collection` (Array | Object): The collection to iterate over  
- `iteratee` (Function): The function invoked per iteration  

## Returns

- (Array): Returns the new mapped array  

## Example

```js
map([1, 2, 3], n => n * 2);

output
[2,4,6]

map(['a', 'b'], v => v.toUpperCase());

output
['A','B']

map({ a: 1, b: 2 }, v => v + 1);

output
[2,3]