/*!
{
  "author": "Graham Fairweather",
  "copywrite": "Copyright (c) 2017",
  "date": "2019-07-11T18:15:53.997Z",
  "describe": "",
  "description": "Converts argument to a value of type Number.",
  "file": "to-number-x.js",
  "hash": "8c5e51c99eace9c5ce6f",
  "license": "MIT",
  "version": "3.0.2"
}
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["toNumberX"] = factory();
	else
		root["toNumberX"] = factory();
})((function () {
  'use strict';

  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof global !== 'undefined') {
    return global;
  }

  return Function('return this')();
}()), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = __webpack_require__(4)();

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isRealSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') {
			return false;
		}
		return symStringRegex.test(symToStr.call(value));
	};

	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') {
			return true;
		}
		if (toStr.call(value) !== '[object Symbol]') {
			return false;
		}
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {

	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return  false && false;
	};
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isPrimitive(val) {
  if (typeof val === 'object') {
    return val === null;
  }
  return typeof val !== 'function';
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * This method attempts to invoke the function, returning either the result or
 * the caught error object. Any additional arguments are provided to the
 * function when it's invoked.
 *
 * @param {Function} fn - The function to attempt.
 * @param {...*} [args] - The arguments to invoke the function with.
 * @returns {object} Returns an object of the result.
 */
module.exports = function attempt(fn, ...args) {
  try {
    return {
      threw: false,
      value: fn.apply(this, args),
    };
  } catch (e) {
    return {
      threw: true,
      value: e,
    };
  }
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateObject(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) { return false; }
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var origSymbol = global.Symbol;
var hasSymbolSham = __webpack_require__(6);

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 17], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/is-symbol/index.js
var is_symbol = __webpack_require__(0);
var is_symbol_default = /*#__PURE__*/__webpack_require__.n(is_symbol);

// CONCATENATED MODULE: ./node_modules/has-symbol-support-x/src/has-symbol-support-x.js
/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */
/* harmony default export */ var has_symbol_support_x = (typeof Symbol === 'function' &&
  /* eslint-disable-next-line compat/compat */
  typeof Symbol('') === 'symbol');

// EXTERNAL MODULE: ./node_modules/is-primitive/index.js
var is_primitive = __webpack_require__(1);
var is_primitive_default = /*#__PURE__*/__webpack_require__.n(is_primitive);

// EXTERNAL MODULE: ./node_modules/is-date-object/index.js
var is_date_object = __webpack_require__(3);
var is_date_object_default = /*#__PURE__*/__webpack_require__.n(is_date_object);

// EXTERNAL MODULE: ./node_modules/attempt-x/src/attempt-x.js
var attempt_x = __webpack_require__(2);
var attempt_x_default = /*#__PURE__*/__webpack_require__.n(attempt_x);

// CONCATENATED MODULE: ./node_modules/to-boolean-x/src/to-boolean-x.js
/**
 * The abstract operation ToBoolean converts argument to a value of type Boolean.
 *
 * @param {*} [value] - The value to be converted.
 * @returns {boolean} 'true' if value is truthy; otherwise 'false'.
 */
function toBoolean(value) {
  return !!value;
}

// CONCATENATED MODULE: ./node_modules/is-falsey-x/src/is-falsey-x.js


/**
 * This method tests if a given value is falsey.
 *
 * @param {*} [value] - The value to test.
 * @returns {boolean} `true` if the value is falsey: otherwise `false`.
 */
function isFalsey(value) {
  return toBoolean(value) === false;
}

// CONCATENATED MODULE: ./node_modules/to-string-tag-x/src/to-string-tag-x.js
const nativeObjectToString = {}.toString;

/**
 * The `toStringTag` method returns "[object type]", where type is the
 * object type.
 *
 * @param {*} [value] - The object of which to get the object type string.
 * @returns {string} The object type string.
 */
function toStringTag(value) {
  if (value === null) {
    return '[object Null]';
  }

  if (typeof value === 'undefined') {
    return '[object Undefined]';
  }

  return nativeObjectToString.call(value);
}

// CONCATENATED MODULE: ./node_modules/has-to-string-tag-x/src/has-to-string-tag-x.js


/**
 * Indicates if `Symbol.toStringTag`exists and is the correct type.
 * `true`, if it exists and is the correct type, otherwise `false`.
 *
 * @type boolean
 */
/* harmony default export */ var has_to_string_tag_x = (has_symbol_support_x &&
  /* eslint-disable-next-line compat/compat */
  typeof Symbol.toStringTag === 'symbol');

// CONCATENATED MODULE: ./node_modules/is-nil-x/src/is-nil-x.js
/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @param {*} [value] - The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 */
function isNil(value) {
  /* eslint-disable-next-line lodash/prefer-is-nil */
  return value === null || typeof value === 'undefined';
}

// CONCATENATED MODULE: ./node_modules/require-object-coercible-x/src/require-object-coercible-x.js


/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} [value] - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 */
function RequireObjectCoercible(value) {
  if (isNil(value)) {
    throw new TypeError(`Cannot call method on ${value}`);
  }

  return value;
}

// CONCATENATED MODULE: ./node_modules/to-string-x/src/to-string-x.js


/**
 * The abstract operation ToString converts argument to a value of type String.
 *
 * @param {*} [value] - The value to convert to a string.
 * @throws {TypeError} If `value` is a Symbol.
 * @returns {string} The converted value.
 */
function ToString(value) {
  if (is_symbol_default()(value)) {
    throw new TypeError('Cannot convert a Symbol value to a string');
  }

  return ''.constructor(value);
}

// CONCATENATED MODULE: ./node_modules/require-coercible-to-string-x/src/require-coercible-to-string-x.js



/**
 * This method requires an argument is corecible then converts using ToString.
 *
 * @param {*} [value] - The value to converted to a string.
 * @throws {TypeError} If value is null or undefined.
 * @returns {string} The value as a string.
 */
function requireCoercibleToString(value) {
  return ToString(RequireObjectCoercible(value));
}

// CONCATENATED MODULE: ./node_modules/white-space-x/src/white-space-x.js
/**
 * A record of a white space character.
 *
 * @typedef {object} CharRecord
 * @property {number} code - The character code.
 * @property {string} description - A description of the character.
 * @property {boolean} es5 - Whether the spec lists this as a white space.
 * @property {boolean} es2015 - Whether the spec lists this as a white space.
 * @property {boolean} es2016 - Whether the spec lists this as a white space.
 * @property {boolean} es2017 - Whether the spec lists this as a white space.
 * @property {boolean} es2018 - Whether the spec lists this as a white space.
 * @property {string} string - The character string.
 */

/**
 * An array of the whitespace char codes, string, descriptions and language
 * presence in the specifications.
 *
 * @type Array.<CharRecord>
 */
const list = [
  {
    code: 0x0009,
    description: 'Tab',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u0009',
  },
  {
    code: 0x000a,
    description: 'Line Feed',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u000a',
  },
  {
    code: 0x000b,
    description: 'Vertical Tab',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u000b',
  },
  {
    code: 0x000c,
    description: 'Form Feed',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u000c',
  },
  {
    code: 0x000d,
    description: 'Carriage Return',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u000d',
  },
  {
    code: 0x0020,
    description: 'Space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u0020',
  },
  /*
  {
    code: 0x0085,
    description: 'Next line',
    es5: false,
    es2015: false,
    es2016: false,
    es2017: false,
    es2018: false,
    string: '\u0085'
  }
  */
  {
    code: 0x00a0,
    description: 'No-break space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u00a0',
  },
  {
    code: 0x1680,
    description: 'Ogham space mark',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u1680',
  },
  {
    code: 0x180e,
    description: 'Mongolian vowel separator',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: false,
    es2018: false,
    string: '\u180e',
  },
  {
    code: 0x2000,
    description: 'En quad',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2000',
  },
  {
    code: 0x2001,
    description: 'Em quad',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2001',
  },
  {
    code: 0x2002,
    description: 'En space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2002',
  },
  {
    code: 0x2003,
    description: 'Em space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2003',
  },
  {
    code: 0x2004,
    description: 'Three-per-em space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2004',
  },
  {
    code: 0x2005,
    description: 'Four-per-em space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2005',
  },
  {
    code: 0x2006,
    description: 'Six-per-em space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2006',
  },
  {
    code: 0x2007,
    description: 'Figure space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2007',
  },
  {
    code: 0x2008,
    description: 'Punctuation space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2008',
  },
  {
    code: 0x2009,
    description: 'Thin space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2009',
  },
  {
    code: 0x200a,
    description: 'Hair space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u200a',
  },
  /*
  {
    code: 0x200b,
    description: 'Zero width space',
    es5: false,
    es2015: false,
    es2016: false,
    es2017: false,
    es2018: false,
    string: '\u200b'
  },
  */
  {
    code: 0x2028,
    description: 'Line separator',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2028',
  },
  {
    code: 0x2029,
    description: 'Paragraph separator',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2029',
  },
  {
    code: 0x202f,
    description: 'Narrow no-break space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u202f',
  },
  {
    code: 0x205f,
    description: 'Medium mathematical space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u205f',
  },
  {
    code: 0x3000,
    description: 'Ideographic space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u3000',
  },
  {
    code: 0xfeff,
    description: 'Byte Order Mark',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\ufeff',
  },
];

/**
 * A string of the ES5 to ES2016 whitespace characters.
 *
 * @type string
 */
let stringES2016 = '';

/**
 * A string of the ES2017 to ES2018 whitespace characters.
 *
 * @type string
 */
let stringES2018 = '';
const {length: white_space_x_length} = list;
for (let i = 0; i < white_space_x_length; i += 1) {
  if (list[i].es2016) {
    stringES2016 += list[i].string;
  }

  if (list[i].es2018) {
    stringES2018 += list[i].string;
  }
}

const string2018 = stringES2018;

/* harmony default export */ var white_space_x = (string2018);
const string2016 = stringES2016;

// CONCATENATED MODULE: ./node_modules/trim-left-x/src/trim-left-x.js



const RegExpCtr = /none/.constructor;
const reLeft2016 = new RegExpCtr(`^[${string2016}]+`);
const reLeft = new RegExpCtr(`^[${white_space_x}]+`);
const {replace} = '';

/**
 * This method removes whitespace from the left end of a string. (ES2016).
 *
 * @param {string} string - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */
function trimLeft2016(string) {
  return replace.call(requireCoercibleToString(string), reLeft2016, '');
}

/**
 * This method removes whitespace from the left end of a string. (ES2018).
 *
 * @param {string} string - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */
function trimLeft2018(string) {
  return replace.call(requireCoercibleToString(string), reLeft, '');
}

// CONCATENATED MODULE: ./node_modules/trim-right-x/src/trim-right-x.js



const trim_right_x_RegExpCtr = /none/.constructor;
const reRight2016 = new trim_right_x_RegExpCtr(`[${string2016}]+$`);
const reRight2018 = new trim_right_x_RegExpCtr(`[${white_space_x}]+$`);
const {replace: trim_right_x_replace} = '';

/**
 * This method removes whitespace from the right end of a string. (ES2016).
 *
 * @param {string} string - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */
function trimRight2016(string) {
  return trim_right_x_replace.call(requireCoercibleToString(string), reRight2016, '');
}

/**
 * This method removes whitespace from the right end of a string. (ES2018).
 *
 * @param {string} string - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */
function trimRight2018(string) {
  return trim_right_x_replace.call(requireCoercibleToString(string), reRight2018, '');
}

// CONCATENATED MODULE: ./node_modules/trim-x/src/trim-x.js



/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2016).
 *
 * @param {string} string - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */
function trim2016(string) {
  return trimLeft2016(trimRight2016(string));
}

/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2018).
 *
 * @param {string} string - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */
function trim2018(string) {
  return trimLeft2018(trimRight2018(string));
}

// CONCATENATED MODULE: ./node_modules/normalize-space-x/src/normalize-space-x.js



const normalize_space_x_RegExpCtr = /none/.constructor;
const reNormalize2016 = new normalize_space_x_RegExpCtr(`[${string2016}]+`, 'g');
const reNormalize2018 = new normalize_space_x_RegExpCtr(`[${white_space_x}]+`, 'g');
const {replace: normalize_space_x_replace} = '';

/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2016).
 *
 * @param {string} string - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The normalized string.
 */
function normalizeSpace2016(string) {
  return normalize_space_x_replace.call(trim2016(string), reNormalize2016, ' ');
}

/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2018).
 *
 * @param {string} string - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 */
function normalizeSpace2018(string) {
  return normalize_space_x_replace.call(trim2018(string), reNormalize2018, ' ');
}

// CONCATENATED MODULE: ./node_modules/replace-comments-x/src/replace-comments-x.js



const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
const {replace: replace_comments_x_replace} = '';

/**
 * This method replaces comments in a string.
 *
 * @param {string} string - The string to be stripped.
 * @param {string} [replacement=''] - The string to be used as a replacement.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @throws {TypeError} If replacement is not coercible.
 * @returns {string} The new string with the comments replaced.
 */
function replaceComments(string, replacement) {
  return replace_comments_x_replace.call(requireCoercibleToString(string), STRIP_COMMENTS, arguments.length > 1 ? ToString(replacement) : '');
}

// CONCATENATED MODULE: ./node_modules/is-function-x/src/is-function-x.js









const fToString = Function.prototype.toString;
const funcTag = '[object Function]';
const genTag = '[object GeneratorFunction]';
const asyncTag = '[object AsyncFunction]';
const ctrRx = /^class /;
const {test} = ctrRx;

const hasNativeClass =
  attempt_x_default()(() => {
    /* eslint-disable-next-line no-new-func */
    return Function('"use strict"; return class My {};')();
  }).threw === false;

const testClassstring = function _testClassstring(value) {
  return test.call(ctrRx, normalizeSpace2018(replaceComments(fToString.call(value), ' ')));
};

const isES6ClassFn = function isES6ClassFunc(value) {
  const result = attempt_x_default()(testClassstring, value);

  return result.threw === false && result.value;
};

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @private
 * @param {*} value - The value to check.
 * @param {boolean} allowClass - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */
const tryFuncToString = function funcToString(value, allowClass) {
  if (hasNativeClass && allowClass === false && isES6ClassFn(value)) {
    return false;
  }

  return attempt_x_default.a.call(value, fToString).threw === false;
};

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @param {*} value - The value to check.
 * @param {boolean} [allowClass=false] - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */
function isFunction(value, allowClass) {
  if (is_primitive_default()(value)) {
    return false;
  }

  if (has_to_string_tag_x) {
    return tryFuncToString(value, toBoolean(allowClass));
  }

  if (hasNativeClass && isFalsey(allowClass) && isES6ClassFn(value)) {
    return false;
  }

  const strTag = toStringTag(value);

  return strTag === funcTag || strTag === genTag || strTag === asyncTag;
}

// CONCATENATED MODULE: ./node_modules/to-primitive-x/src/to-primitive-x.js








/* eslint-disable-next-line compat/compat */
const symToPrimitive = has_symbol_support_x && Symbol.toPrimitive;
/* eslint-disable-next-line compat/compat */
const symValueOf = has_symbol_support_x && Symbol.prototype.valueOf;

const toStringOrder = ['toString', 'valueOf'];
const toNumberOrder = ['valueOf', 'toString'];
const orderLength = 2;

const ordinaryToPrimitive = function _ordinaryToPrimitive(O, hint) {
  RequireObjectCoercible(O);

  if (typeof hint !== 'string' || (hint !== 'number' && hint !== 'string')) {
    throw new TypeError('hint must be "string" or "number"');
  }

  const methodNames = hint === 'string' ? toStringOrder : toNumberOrder;
  let method;
  let result;
  for (let i = 0; i < orderLength; i += 1) {
    method = O[methodNames[i]];

    if (isFunction(method)) {
      result = method.call(O);

      if (is_primitive_default()(result)) {
        return result;
      }
    }
  }

  throw new TypeError('No default value');
};

const getMethod = function _getMethod(O, P) {
  const func = O[P];

  if (isNil(func) === false) {
    if (isFunction(func) === false) {
      throw new TypeError(`${func} returned for property ${P} of object ${O} is not a function`);
    }

    return func;
  }

  /* eslint-disable-next-line no-void */
  return void 0;
};

/**
 * This method converts a JavaScript object to a primitive value.
 * Note: When toPrimitive is called with no hint, then it generally behaves as
 * if the hint were Number. However, objects may over-ride this behaviour by
 * defining a @@toPrimitive method. Of the objects defined in this specification
 * only Date objects (see 20.3.4.45) and Symbol objects (see 19.4.3.4) over-ride
 * the default ToPrimitive behaviour. Date objects treat no hint as if the hint
 * were String.
 *
 * @param {*} input - The input to convert.
 * @param {NumberConstructor|StringConstructor} [preferredType] - The preferred type (String or Number).
 * @throws {TypeError} If unable to convert input to a primitive.
 * @returns {string|number} The converted input as a primitive.
 * @see {http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive}
 */
function toPrimitive(input, preferredType) {
  if (is_primitive_default()(input)) {
    return input;
  }

  let hint = 'default';

  if (arguments.length > 1) {
    if (preferredType === String) {
      hint = 'string';
    } else if (preferredType === Number) {
      hint = 'number';
    }
  }

  let exoticToPrim;

  if (has_symbol_support_x) {
    if (symToPrimitive) {
      exoticToPrim = getMethod(input, symToPrimitive);
    } else if (is_symbol_default()(input)) {
      exoticToPrim = symValueOf;
    }
  }

  if (typeof exoticToPrim !== 'undefined') {
    const result = exoticToPrim.call(input, hint);

    if (is_primitive_default()(result)) {
      return result;
    }

    throw new TypeError('unable to convert exotic object to primitive');
  }

  if (hint === 'default' && (is_date_object_default()(input) || is_symbol_default()(input))) {
    hint = 'string';
  }

  return ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
}

// CONCATENATED MODULE: ./node_modules/nan-x/src/nan-x.js
/**
 * The constant NaN derived mathematically by 0 / 0.
 *
 * @type number
 */
/* harmony default export */ var nan_x = (0 / 0);

// CONCATENATED MODULE: ./node_modules/parse-int-x/src/parse-int-x.js




const nativeParseInt = parseInt;
/**  @type {Function} */
const castNumber = (0).constructor;
// noinspection JSPotentiallyInvalidConstructorUsage
const {charAt} = ''.constructor.prototype;
const hexRegex = /^[-+]?0[xX]/;
const {test: parse_int_x_test} = hexRegex;

/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2016).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */
function parseInt2016(string, radix) {
  const str = trimLeft2016(ToString(string));

  return nativeParseInt(str, castNumber(radix) || (parse_int_x_test.call(hexRegex, str) ? 16 : 10));
}

/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2018).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */
function parseInt2018(string, radix) {
  const str = trimLeft2018(ToString(string));

  if (charAt.call(str, 0) === '\u180E') {
    return nan_x;
  }

  return nativeParseInt(str, castNumber(radix) || (parse_int_x_test.call(hexRegex, str) ? 16 : 10));
}

// CONCATENATED MODULE: ./dist/to-number-x.esm.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumber2016", function() { return toNumber2016; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toNumber2018; });





var binaryRadix = 2;
var octalRadix = 8;
var testCharsCount = 2;
var ERROR_MESSAGE = 'Cannot convert a Symbol value to a number';
/** @type {NumberConstructor} */

var to_number_x_esm_castNumber = testCharsCount.constructor;
var pStrSlice = ERROR_MESSAGE.slice;
var binaryRegex = /^0b[01]+$/i;
var RegExpConstructor = binaryRegex.constructor; // Note that in IE 8, RegExp.prototype.test doesn't seem to exist: ie, "test" is
// an own property of regexes. wtf.

var to_number_x_esm_test = binaryRegex.test;

var isBinary = function _isBinary(value) {
  return to_number_x_esm_test.call(binaryRegex, value);
};

var octalRegex = /^0o[0-7]+$/i;

var isOctal = function _isOctal(value) {
  return to_number_x_esm_test.call(octalRegex, value);
};

var nonWSregex2016 = new RegExpConstructor("[\x85\u200B\uFFFE]", 'g');

var hasNonWS2016 = function _hasNonWS(value) {
  return to_number_x_esm_test.call(nonWSregex2016, value);
};

var nonWSregex2018 = new RegExpConstructor("[\x85\u180E\u200B\uFFFE]", 'g');

var hasNonWS2018 = function _hasNonWS(value) {
  return to_number_x_esm_test.call(nonWSregex2018, value);
};

var invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;

var isInvalidHexLiteral = function _isInvalidHexLiteral(value) {
  return to_number_x_esm_test.call(invalidHexLiteral, value);
};
/**
 * This method converts argument to a value of type Number. (ES2016).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */


function toNumber2016(argument) {
  var value = toPrimitive(argument, Number);

  if (is_symbol_default()(value)) {
    throw new TypeError(ERROR_MESSAGE);
  }

  if (typeof value === 'string') {
    if (isBinary(value)) {
      return toNumber2016(parseInt2016(pStrSlice.call(value, testCharsCount), binaryRadix));
    }

    if (isOctal(value)) {
      return toNumber2016(parseInt2016(pStrSlice.call(value, testCharsCount), octalRadix));
    }

    if (hasNonWS2016(value) || isInvalidHexLiteral(value)) {
      return nan_x;
    }

    var trimmed = trim2016(value);

    if (trimmed !== value) {
      return toNumber2016(trimmed);
    }
  }

  return to_number_x_esm_castNumber(value);
}
/**
 * This method converts argument to a value of type Number. (ES2018).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */

function toNumber2018(argument) {
  var value = toPrimitive(argument, to_number_x_esm_castNumber);

  if (is_symbol_default()(value)) {
    throw new TypeError(ERROR_MESSAGE);
  }

  if (typeof value === 'string') {
    if (isBinary(value)) {
      return toNumber2018(parseInt2018(pStrSlice.call(value, testCharsCount), binaryRadix));
    }

    if (isOctal(value)) {
      return toNumber2018(parseInt2018(pStrSlice.call(value, testCharsCount), octalRadix));
    }

    if (hasNonWS2018(value) || isInvalidHexLiteral(value)) {
      return nan_x;
    }

    var trimmed = trim2018(value);

    if (trimmed !== value) {
      return toNumber2018(trimmed);
    }
  }

  return to_number_x_esm_castNumber(value);
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=to-number-x.js.map