import isSymbol from 'is-symbol';
import toPrimitive from 'to-primitive-x';
import trim from 'trim-x';
import $parseInt from 'parse-int-x';
import NAN from 'nan-x';
var binaryRadix = 2;
var octalRadix = 8;
var testCharsCount = 2;
var ERROR_MESSAGE = 'Cannot convert a Symbol value to a number';
var castNumber = testCharsCount.constructor;
var pStrSlice = ERROR_MESSAGE.slice;
var binaryRegex = /^0b[01]+$/i;
var RegExpConstructor = binaryRegex.constructor; // Note that in IE 8, RegExp.prototype.test doesn't seem to exist: ie, "test" is
// an own property of regexes. wtf.

var test = binaryRegex.test;

var isBinary = function isBinary(value) {
  return test.call(binaryRegex, value);
};

var octalRegex = /^0o[0-7]+$/i;

var isOctal = function isOctal(value) {
  return test.call(octalRegex, value);
};

var nonWSregex = new RegExpConstructor("[\x85\u180E\u200B\uFFFE]", 'g');

var hasNonWS = function hasNonWS(value) {
  return test.call(nonWSregex, value);
};

var invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;

var isInvalidHexLiteral = function isInvalidHexLiteral(value) {
  return test.call(invalidHexLiteral, value);
};

var assertNotSymbol = function assertNotSymbol(value) {
  if (isSymbol(value)) {
    throw new TypeError(ERROR_MESSAGE);
  }

  return value;
};

var parseBase = function parseBase(value, radix) {
  return $parseInt(pStrSlice.call(value, testCharsCount), radix);
};

var parseString = function parseString(toNum, value) {
  if (isBinary(value)) {
    return toNum(parseBase(value, binaryRadix));
  }

  if (isOctal(value)) {
    return toNum(parseBase(value, octalRadix));
  }

  return null;
};

var convertString = function convertString(toNum, value) {
  var val = parseString(toNum, value);

  if (val !== null) {
    return val;
  }

  if (hasNonWS(value) || isInvalidHexLiteral(value)) {
    return NAN;
  }

  var trimmed = trim(value);

  if (trimmed !== value) {
    return toNum(trimmed);
  }

  return null;
};
/**
 * This method converts argument to a value of type Number. (ES2019).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */


var toNumber = function toNumber(argument) {
  var value = assertNotSymbol(toPrimitive(argument, castNumber));

  if (typeof value === 'string') {
    var val = convertString(toNumber, value);

    if (val !== null) {
      return val;
    }
  }

  return castNumber(value);
};

export default toNumber;

//# sourceMappingURL=to-number-x.esm.js.map