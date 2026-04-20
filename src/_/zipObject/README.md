# zipObject

Creates an object from two arrays: one of property keys and one of corresponding values.

## Parameters

- `props` (Array): The array of property names  
- `values` (Array): The array of corresponding values  

## Returns

- (Object): Returns the new object  

## Example

```js
zipObject(['a', 'b'], [1, 2]); => { a: 1, b: 2 }

zipObject(['x', 'y', 'z'], [10, 20]); => { x: 10, y: 20, z: undefined }