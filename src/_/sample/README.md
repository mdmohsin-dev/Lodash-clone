# sample()

Gets a random element from a collection.

## Parameters

- `collection` (Array | Object): The collection to sample  

## Returns

- (*): Returns a random element, or `undefined` if the collection is empty  

## Example

```js
sample([1, 2, 3, 4]);

output
(random value like 2)

sample(['a', 'b', 'c']);

output
(random value like 'b')

sample([]);

output
undefined