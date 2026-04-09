# size

Gets the size of a collection.

## Parameters

- `collection` (Array | Object | string): The collection to inspect  

## Returns

- (number): Returns the size of the collection

## Example

```js
size([1, 2, 3]); => 3
size({ a: 1, b: 2 }); => 2
size("hello"); => 5