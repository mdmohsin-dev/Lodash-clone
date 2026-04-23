# defaultTo

Returns a default value if the given value is `null`, `undefined`, or `NaN`.

## Parameters

- `value` (*): The value to check  
- `defaultValue` (*): The default value  

## Returns

- (*): Returns the resolved value  

## Example

```js
defaultTo(1, 10); => 1

defaultTo(undefined, 10); => 10

defaultTo(null, 'fallback'); => 'fallback'

defaultTo(NaN, 5); => 5