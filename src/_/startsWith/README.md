# startsWith

Checks if a string starts with the given target string.

## Parameters

- `string` (string): The string to inspect  
- `target` (string): The string to search for  
- `position` (number): The position to search from (optional)  

## Returns

- (boolean): Returns `true` if the string starts with the target, otherwise `false`  

## Example

```js
startsWith('hello world', 'hello'); => true

startsWith('hello world', 'world'); => false

startsWith('hello world', 'world', 6); => true