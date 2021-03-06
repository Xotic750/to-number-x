<a
  href="https://travis-ci.org/Xotic750/to-number-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/to-number-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/to-number-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/to-number-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/to-number-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/to-number-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/to-number-x"
  title="npm version">
<img src="https://badge.fury.io/js/to-number-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/to-number-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/to-number-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/to-number-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/to-number-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/to-number-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/to-number-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_to-number-x"></a>

## to-number-x

Converts argument to a value of type Number.

<a name="exp_module_math-trim-x.exports"></a>

### `module.exports(value)` ⇒ <code>\*</code> ⏏

<a name="module_to-number-x"></a>

### `to-number-x` ⇒ <code>\*</code>

This method converts argument to a value of type Number. (ES2019)

**Kind**: static property of [<code>to-number-x</code>](#module_to-number-x)  
**Returns**: <code>\*</code> - The argument converted to a number.  
**Throws**:

- <code>TypeError</code> - If argument is a Symbol or not coercible.

| Param    | Type            | Description                          |
| -------- | --------------- | ------------------------------------ |
| argument | <code>\*</code> | The argument to convert to a number. |

**Example**

```js
import toNumber from 'to-number-x';

console.log(toNumber('1')); // 1
console.log(toNumber(null)); // 0
console.log(toNumber(true)); // 1
console.log(toNumber('0o10')); // 8
console.log(toNumber('0b10')); // 2
console.log(toNumber('0xF')); // 16

console.log(toNumber(' 1 ')); // 1

console.log(toNumber(Symbol(''))); // TypeError
console.log(toNumber(Object.create(null))); // TypeError
```
