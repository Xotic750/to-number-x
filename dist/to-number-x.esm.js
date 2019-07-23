import isSymbol from 'is-symbol';
import toPrimitive from 'to-primitive-x';
import trim from 'trim-x';
import $parseInt from 'parse-int-x';
import NAN from 'nan-x';
var binaryRadix = 2;
var octalRadix = 8;
var testCharsCount = 2;
var ERROR_MESSAGE = 'Cannot convert a Symbol value to a number';
/** @type {NumberConstructor} */

var castNumber = testCharsCount.constructor;
var pStrSlice = ERROR_MESSAGE.slice;
var binaryRegex = /^0b[01]+$/i;
var RegExpConstructor = binaryRegex.constructor; // Note that in IE 8, RegExp.prototype.test doesn't seem to exist: ie, "test" is
// an own property of regexes. wtf.

var test = binaryRegex.test;

var isBinary = function _isBinary(value) {
  return test.call(binaryRegex, value);
};

var octalRegex = /^0o[0-7]+$/i;

var isOctal = function _isOctal(value) {
  return test.call(octalRegex, value);
};

var nonWSregex2018 = new RegExpConstructor("[\x85\u180E\u200B\uFFFE]", 'g');

var hasNonWS2018 = function _hasNonWS(value) {
  return test.call(nonWSregex2018, value);
};

var invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;

var isInvalidHexLiteral = function _isInvalidHexLiteral(value) {
  return test.call(invalidHexLiteral, value);
};
/**
 * This method converts argument to a value of type Number. (ES2018).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */


var toNumber = function toNumber(argument) {
  var value = toPrimitive(argument, castNumber);

  if (isSymbol(value)) {
    throw new TypeError(ERROR_MESSAGE);
  }

  if (typeof value === 'string') {
    if (isBinary(value)) {
      return toNumber($parseInt(pStrSlice.call(value, testCharsCount), binaryRadix));
    }

    if (isOctal(value)) {
      return toNumber($parseInt(pStrSlice.call(value, testCharsCount), octalRadix));
    }

    if (hasNonWS2018(value) || isInvalidHexLiteral(value)) {
      return NAN;
    }

    var trimmed = trim(value);

    if (trimmed !== value) {
      return toNumber(trimmed);
    }
  }

  return castNumber(value);
};

export default toNumber;

//# sourceMappingURL=to-number-x.esm.js.map