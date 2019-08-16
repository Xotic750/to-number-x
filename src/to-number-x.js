import isSymbol from 'is-symbol';
import toPrimitive from 'to-primitive-x';
import trim from 'trim-x';
import $parseInt from 'parse-int-x';
import NAN from 'nan-x';
import methodize from 'simple-methodize-x';

const binaryRadix = 2;
const octalRadix = 8;
const testCharsCount = 2;
const ERROR_MESSAGE = 'Cannot convert a Symbol value to a number';

const castNumber = testCharsCount.constructor;
const methodizedStringSlice = methodize(ERROR_MESSAGE.slice);

const binaryRegex = /^0b[01]+$/i;
const RegExpConstructor = binaryRegex.constructor;
// Note that in IE 8, RegExp.prototype.test doesn't seem to exist: ie, "test" is
// an own property of regexes. wtf.
const methodizedTest = methodize(binaryRegex.test);
const isBinary = function isBinary(value) {
  return methodizedTest(binaryRegex, value);
};

const octalRegex = /^0o[0-7]+$/i;
const isOctal = function isOctal(value) {
  return methodizedTest(octalRegex, value);
};

const nonWSregex = new RegExpConstructor('[\u0085\u180e\u200b\ufffe]', 'g');
const hasNonWS = function hasNonWS(value) {
  return methodizedTest(nonWSregex, value);
};

const invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;
const isInvalidHexLiteral = function isInvalidHexLiteral(value) {
  return methodizedTest(invalidHexLiteral, value);
};

const assertNotSymbol = function assertNotSymbol(value) {
  if (isSymbol(value)) {
    throw new TypeError(ERROR_MESSAGE);
  }

  return value;
};

const parseBase = function parseBase(value, radix) {
  return $parseInt(methodizedStringSlice(value, testCharsCount), radix);
};

const parseString = function parseString(toNum, value) {
  if (isBinary(value)) {
    return toNum(parseBase(value, binaryRadix));
  }

  if (isOctal(value)) {
    return toNum(parseBase(value, octalRadix));
  }

  return null;
};

const convertString = function convertString(toNum, value) {
  const val = parseString(toNum, value);

  if (val !== null) {
    return val;
  }

  if (hasNonWS(value) || isInvalidHexLiteral(value)) {
    return NAN;
  }

  const trimmed = trim(value);

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
const toNumber = function toNumber(argument) {
  const value = assertNotSymbol(toPrimitive(argument, castNumber));

  if (typeof value === 'string') {
    const val = convertString(toNumber, value);

    if (val !== null) {
      return val;
    }
  }

  return castNumber(value);
};

export default toNumber;
