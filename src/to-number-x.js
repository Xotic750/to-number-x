import toPrimitive from 'to-primitive-x';
import trim, {trim2016} from 'trim-x';
import $parseInt, {parseInt2016} from 'parse-int-x';
import NAN from 'nan-x';

/** @type {NumberConstructor} */
const castNumber = (0).constructor;
// noinspection JSPotentiallyInvalidConstructorUsage
const pStrSlice = ''.constructor.prototype.slice;

const binaryRegex = /^0b[01]+$/i;
const Rx = binaryRegex.constructor;
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

const nonWSregex2016 = new Rx('[\u0085\u200b\ufffe]', 'g');
const hasNonWS2016 = function _hasNonWS(value) {
  return test.call(nonWSregex2016, value);
};

const nonWSregex2018 = new Rx('[\u0085\u180e\u200b\ufffe]', 'g');
const hasNonWS2018 = function _hasNonWS(value) {
  return test.call(nonWSregex2018, value);
};

const invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;
const isInvalidHexLiteral = function _isInvalidHexLiteral(value) {
  return test.call(invalidHexLiteral, value);
};

/**
 * This method converts argument to a value of type Number. (ES2016).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */
export function toNumber2016(argument) {
  const value = toPrimitive(argument, Number);

  if (typeof value === 'symbol') {
    throw new TypeError('Cannot convert a Symbol value to a number');
  }

  if (typeof value === 'string') {
    if (isBinary(value)) {
      return toNumber2016(parseInt2016(pStrSlice.call(value, 2), 2));
    }

    if (isOctal(value)) {
      return toNumber2016(parseInt2016(pStrSlice.call(value, 2), 8));
    }

    if (hasNonWS2016(value) || isInvalidHexLiteral(value)) {
      return NAN;
    }

    const trimmed = trim2016(value);

    if (trimmed !== value) {
      return toNumber2016(trimmed);
    }
  }

  return castNumber(value);
}

/**
 * This method converts argument to a value of type Number. (ES2018).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */
export default function toNumber2018(argument) {
  const value = toPrimitive(argument, Number);

  if (typeof value === 'symbol') {
    throw new TypeError('Cannot convert a Symbol value to a number');
  }

  if (typeof value === 'string') {
    if (isBinary(value)) {
      return toNumber2018($parseInt(pStrSlice.call(value, 2), 2));
    }

    if (isOctal(value)) {
      return toNumber2018($parseInt(pStrSlice.call(value, 2), 8));
    }

    if (hasNonWS2018(value) || isInvalidHexLiteral(value)) {
      return NAN;
    }

    const trimmed = trim(value);

    if (trimmed !== value) {
      return toNumber2018(trimmed);
    }
  }

  return castNumber(value);
}
