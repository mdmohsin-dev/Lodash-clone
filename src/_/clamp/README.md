# clamp

Clamps a number within the inclusive `lower` and `upper` bounds.

## Parameters

- `number` (number): The number to clamp  
- `lower` (number): The lower bound  
- `upper` (number): The upper bound  

## Returns

- (number): Returns the clamped number  

## Example

```js
clamp(10, 0, 5);

output
5

clamp(-3, 0, 5);

output
0

clamp(3, 0, 5);

output
3