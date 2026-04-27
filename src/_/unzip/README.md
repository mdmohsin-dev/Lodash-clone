# unzip

The inverse of `zip`; this method accepts an array of grouped elements and creates an array regrouping the elements to their pre-zip configuration.

## Parameters

- `array` (Array): The array of grouped elements  

## Returns

- (Array): Returns the new array of regrouped elements  

## Example

```js
unzip([[1, 3, 5], [2, 4, 6]]);

output
[[1,2],[3,4],[5,6]]

unzip([['a', 1], ['b', 2], ['c', 3]]);

output
[['a','b','c'],[1,2,3]]

unzip([]);

output
[]