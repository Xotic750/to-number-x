import isSymbol from 'is-symbol';
import toPrimitive from 'to-primitive-x';
import trim from 'trim-x';
import $parseInt from 'parse-int-x';
import NAN from 'nan-x';

const binaryRadix = 2;
const octalRadix = 8;
const testCharsCount = 2;
const ERROR_MESSAGE = 'Cannot convert a Symbol value to a number';

const castNumber = testCharsCount.constructor;
const pStrSlice = ERROR_MESSAGE.slice;

const binaryRegex = /^0b[01]+$/i;
const RegExpConstructor = binaryRegex.constructor;
// Note that in IE 8, RegExp.prototype.test doesn't seem to exist: ie, "test" is
// an own property of regexes. wtf.
const {test} = binaryRegex;
const isBinary = function _isBinary(value) {
  return test.call(binaryRegex, value);
};

const octalRegex = /^0o[0-7]+$/i;
const isOctal = function _isOctal(value) {
  return test.call(octalRegex, value);
};

const nonWSregex2018 = new RegExpConstructor('[\u0085\u180e\u200b\ufffe]', 'g');
const hasNonWS2018 = function _hasNonWS(value) {
  return test.call(nonWSregex2018, value);
};

const invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;
const isInvalidHexLiteral = function _isInvalidHexLiteral(value) {
  return test.call(invalidHexLiteral, value);
};

const assertNotSymbol = function assertNotSymbol(value) {
  if (isSymbol(value)) {
    throw new TypeError(ERROR_MESSAGE);
  }

  return value;
};

/**
 * This method converts argument to a value of type Number. (ES2019).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */
const toNumber = function toNumber(argument) {
  const value = assertNotSymbol(toPrimitive(argument, castNumber));

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

    const trimmed = trim(value);

    if (trimmed !== value) {
      return toNumber(trimmed);
    }
  }

  return castNumber(value);
};

export default toNumber;
