# random

Generates a random number between `lower` and `upper` bounds.

## Parameters

- `lower` (number): The lower bound  
- `upper` (number): The upper bound  
- `floating` (boolean): Specify if a floating-point number should be returned (optional)  

## Returns

- (number): Returns the random number  

## Example

```js
random(1, 5);

output
(random number like 3)

random(1, 5, true);

output
(random number like 2.73)

random(5);

output
(random number between 0 and 5)