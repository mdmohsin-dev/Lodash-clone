# remove

Removes all elements from an array that match a predicate function and returns the removed elements.

## Parameters

- `array` (Array): The array to modify  
- `predicate` (Function): The function invoked per element  

## Returns

- (Array): Returns an array of removed elements

## Example

```js
remove([1, 2, 3, 4], (n) => n % 2 === 0);

output
[2, 4]