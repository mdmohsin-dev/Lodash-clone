# filter

Iterates over elements of a collection and returns an array of all elements that satisfy the predicate.

## Parameters

- `collection` (Array | Object): The collection to inspect  
- `predicate` (Function): The function invoked per iteration  

## Returns

- (Array): Returns a new array of matched elements  

## Example

```js
filter([1, 2, 3, 4], n => n % 2 === 0);

output
[2,4]

filter(['a', 'bb', 'ccc'], str => str.length > 1);

output
['bb','ccc']

filter([1, 3, 5], n => n % 2 === 0);

output
[]