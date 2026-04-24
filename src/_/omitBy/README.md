# omitBy()

Creates an object composed of the own properties of `object` that are not omitted based on a predicate function.

## Parameters

- `object` (Object): The source object  
- `predicate` (Function): The function invoked per property  

## Returns

- (Object): Returns the new object  

## Example

```js
omitBy({ a: 1, b: '2', c: 3 }, value => typeof value === 'number');

output
{ b: '2' }