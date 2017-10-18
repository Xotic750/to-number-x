'use strict';

var lib;
if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');
  if (typeof JSON === 'undefined') {
    JSON = {};
  }
  require('json3').runInContext(null, JSON);
  require('es6-shim');
  var es7 = require('es7-shim');
  Object.keys(es7).forEach(function (key) {
    var obj = es7[key];
    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  lib = require('../../index.js');
} else {
  lib = returnExports;
}

var toNumber = lib.toNumber;
var toNumber2016 = lib.toNumber2016;
var toNumber2018 = lib.toNumber2018;

var hasSymbol = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
var ifSymbolIt = hasSymbol ? it : xit;

var coercibleObject = {
  toString: function () {
    return 42;
  },
  valueOf: function () {
    return 3;
  }
};

var valueOfOnlyObject = {
  toString: function () {
    return {};
  },
  valueOf: function () {
    return 4;
  }
};

var toStringOnlyObject = {
  toString: function () {
    return 7;
  },
  valueOf: function () {
    return {};
  }
};

var objects = [
  {},
  coercibleObject,
  toStringOnlyObject,
  valueOfOnlyObject
];

var uncoercibleObject = {
  toString: function () {
    return {};
  },
  valueOf: function () {
    return {};
  }
};

describe('toNumber', function () {
  var whitespace2016 = ' \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000';
  var whitespace2018 = ' \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000';

  // Zero-width space (zws), next line character (nel), and non-character (bom) are not whitespace.
  var nonWhitespaces2016 = {
    '\\u0085': '\u0085',
    '\\u200b': '\u200b',
    '\\ufffe': '\ufffe'
  };

  var nonWhitespaces2018 = {
    '\\u0085': '\u0085',
    '\\u180e': '\u180e',
    '\\u200b': '\u200b',
    '\\ufffe': '\ufffe'
  };

  describe('basic', function () {
    it('toNumber is a function', function () {
      expect(typeof toNumber).toBe('function');
    });

    it('toNumber2016 is a function', function () {
      expect(typeof toNumber2016).toBe('function');
    });

    it('toNumber is not toNumber2016', function () {
      expect(toNumber).not.toBe(toNumber2016);
    });

    it('toNumber is toNumber2018', function () {
      expect(toNumber).toBe(toNumber2018);
    });
  });

  describe('toNumber2016', function () {
    it('coersion', function () {
      expect(Number.isNaN(toNumber2016(undefined))).toBe(true, 'undefined coerces to NaN');
      expect(toNumber2016(null)).toBe(0, 'null coerces to +0');
      expect(toNumber2016(false)).toBe(0, 'false coerces to +0');
      expect(toNumber2016(true)).toBe(1, 'true coerces to 1');
      expect(toNumber2016(' 1 ')).toBe(1, '` 1 `` coerces to 1');
    });

    it('numbers', function () {
      expect(Number.isNaN(toNumber2016(NaN))).toBe(true, 'NaN returns itself');

      [
        0,
        -0,
        42,
        Infinity,
        -Infinity
      ].forEach(function (num) {
        expect(Object.is(toNumber2016(num), num)).toBe(true, num + ' returns itself');
      });

      [
        'foo',
        '0',
        '4a',
        '2.0',
        'Infinity',
        '-Infinity'
      ].forEach(function (numString) {
        expect(Object.is(toNumber2016(numString), Number(numString))).toBe(true, '"' + numString + '" coerces to ' + Number(numString));
      });
    });

    it('objects', function () {
      objects.forEach(function (object) {
        expect(Object.is(toNumber2016(object), Number(object))).toBe(true, 'object ' + object + ' coerces to same as ToPrimitive of object does');
      });

      expect(function () {
        toNumber2016(uncoercibleObject);
      }).toThrow();
    });

    it('binary literals', function () {
      expect(toNumber2016('0b10')).toBe(2, '0b10 is 2');
      expect(toNumber2016({
        toString: function () {
          return '0b11';
        }
      }), 3, 'Object that toStrings to 0b11 is 3');

      expect(Number.isNaN(toNumber2016('0b12'))).toBe(true, '0b12 is NaN');
      expect(Number.isNaN(toNumber2016({
        toString: function () {
          return '0b112';
        }
      }))).toBe(true, 'Object that toStrings to 0b112 is NaN');
    });

    it('octal literals', function () {
      expect(toNumber2016('0o10')).toBe(8, '0o10 is 8');
      expect(toNumber2016({
        toString: function () {
          return '0o11';
        }
      })).toBe(9, 'Object that toStrings to 0o11 is 9');

      expect(Number.isNaN(toNumber2016('0o18'))).toBe(true, '0o18 is NaN');
      expect(Number.isNaN(toNumber2016({
        toString: function () {
          return '0o118';
        }
      }))).toBe(true, 'Object that toStrings to 0o118 is NaN');
    });

    it('hex literals', function () {
      expect(toNumber2016('0xF')).toBe(15, '0xF is 15');
      expect(toNumber2016({
        toString: function () {
          return '0xA';
        }
      })).toBe(10, 'Object that toStrings to 0xA is 1');

      expect(Number.isNaN(toNumber2016('0xG'))).toBe(true, '0xG is NaN');
      expect(Number.isNaN(toNumber2016({
        toString: function () {
          return '0x11G';
        }
      }))).toBe(true, 'Object that toStrings to 0x11G is NaN');
    });

    it('signed hex numbers', function () {
      expect(Number.isNaN(toNumber2016('-0xF'))).toBe(true, '-0xF is NaN');
      expect(Number.isNaN(toNumber2016(' -0xF '))).toBe(true, 'space-padded -0xF is NaN');
      expect(Number.isNaN(toNumber2016('+0xF'))).toBe(true, '+0xF is NaN');
      expect(Number.isNaN(toNumber2016(' +0xF '))).toBe(true, 'space-padded +0xF is NaN');
    });

    it('trimming of whitespace and non-whitespace characters', function () {
      expect(toNumber2016(whitespace2016 + 0 + whitespace2016)).toBe(0, 'whitespace is trimmed');

      Object.keys(nonWhitespaces2016).forEach(function (desc) {
        var nonWS = nonWhitespaces2016[desc];
        expect(Number.isNaN(toNumber2016(nonWS + 0 + nonWS))).toBe(true, 'non-whitespace ' + desc + ' not trimmed');
      });
    });

    it('works with Dates', function () {
      expect(toNumber2016(new Date(0))).toBe(0);
      var ms = 1504449076121;
      expect(toNumber2016(new Date(ms))).toBe(ms);
    });

    it('should throw if target is not coercible', function () {
      expect(function () {
        toNumber2016(Object.create(null));
      }).toThrow();
    });

    ifSymbolIt('should throw for Symbol', function () {
      var sym = Symbol('foo');
      expect(function () {
        toNumber2016(sym);
      }).toThrow();

      var symObj = Object(sym);
      expect(function () {
        toNumber2016(Object(symObj));
      }).toThrow();
    });
  });

  describe('toNumber2018', function () {
    it('coersion', function () {
      expect(Number.isNaN(toNumber2018(undefined))).toBe(true, 'undefined coerces to NaN');
      expect(toNumber2018(null)).toBe(0, 'null coerces to +0');
      expect(toNumber2018(false)).toBe(0, 'false coerces to +0');
      expect(toNumber2018(true)).toBe(1, 'true coerces to 1');
      expect(toNumber2018(' 1 ')).toBe(1, '` 1 `` coerces to 1');
    });

    it('numbers', function () {
      expect(Number.isNaN(toNumber2018(NaN))).toBe(true, 'NaN returns itself');

      [
        0,
        -0,
        42,
        Infinity,
        -Infinity
      ].forEach(function (num) {
        expect(Object.is(toNumber2018(num), num)).toBe(true, num + ' returns itself');
      });

      [
        'foo',
        '0',
        '4a',
        '2.0',
        'Infinity',
        '-Infinity'
      ].forEach(function (numString) {
        expect(Object.is(toNumber2018(numString), Number(numString))).toBe(true, '"' + numString + '" coerces to ' + Number(numString));
      });
    });

    it('objects', function () {
      objects.forEach(function (object) {
        expect(Object.is(toNumber2018(object), Number(object))).toBe(true, 'object ' + object + ' coerces to same as ToPrimitive of object does');
      });

      expect(function () {
        toNumber2018(uncoercibleObject);
      }).toThrow();
    });

    it('binary literals', function () {
      expect(toNumber2018('0b10')).toBe(2, '0b10 is 2');
      expect(toNumber2018({
        toString: function () {
          return '0b11';
        }
      }), 3, 'Object that toStrings to 0b11 is 3');

      expect(Number.isNaN(toNumber2018('0b12'))).toBe(true, '0b12 is NaN');
      expect(Number.isNaN(toNumber2018({
        toString: function () {
          return '0b112';
        }
      }))).toBe(true, 'Object that toStrings to 0b112 is NaN');
    });

    it('octal literals', function () {
      expect(toNumber2018('0o10')).toBe(8, '0o10 is 8');
      expect(toNumber2018({
        toString: function () {
          return '0o11';
        }
      })).toBe(9, 'Object that toStrings to 0o11 is 9');

      expect(Number.isNaN(toNumber2018('0o18'))).toBe(true, '0o18 is NaN');
      expect(Number.isNaN(toNumber2018({
        toString: function () {
          return '0o118';
        }
      }))).toBe(true, 'Object that toStrings to 0o118 is NaN');
    });

    it('hex literals', function () {
      expect(toNumber2018('0xF')).toBe(15, '0xF is 15');
      expect(toNumber2018({
        toString: function () {
          return '0xA';
        }
      })).toBe(10, 'Object that toStrings to 0xA is 1');

      expect(Number.isNaN(toNumber2018('0xG'))).toBe(true, '0xG is NaN');
      expect(Number.isNaN(toNumber2018({
        toString: function () {
          return '0x11G';
        }
      }))).toBe(true, 'Object that toStrings to 0x11G is NaN');
    });

    it('signed hex numbers', function () {
      expect(Number.isNaN(toNumber2018('-0xF'))).toBe(true, '-0xF is NaN');
      expect(Number.isNaN(toNumber2018(' -0xF '))).toBe(true, 'space-padded -0xF is NaN');
      expect(Number.isNaN(toNumber2018('+0xF'))).toBe(true, '+0xF is NaN');
      expect(Number.isNaN(toNumber2018(' +0xF '))).toBe(true, 'space-padded +0xF is NaN');
    });

    it('trimming of whitespace and non-whitespace characters', function () {
      expect(toNumber2018(whitespace2018 + 0 + whitespace2018)).toBe(0, 'whitespace is trimmed');

      Object.keys(nonWhitespaces2018).forEach(function (desc) {
        var nonWS = nonWhitespaces2018[desc];
        expect(Number.isNaN(toNumber2018(nonWS + 0 + nonWS))).toBe(true, 'non-whitespace ' + desc + ' not trimmed');
      });
    });

    it('works with Dates', function () {
      expect(toNumber2018(new Date(0))).toBe(0);
      var ms = 1504449076121;
      expect(toNumber2018(new Date(ms))).toBe(ms);
    });

    it('should throw if target is not coercible', function () {
      expect(function () {
        toNumber2018(Object.create(null));
      }).toThrow();
    });

    ifSymbolIt('should throw for Symbol', function () {
      var sym = Symbol('foo');
      expect(function () {
        toNumber2018(sym);
      }).toThrow();

      var symObj = Object(sym);
      expect(function () {
        toNumber2018(Object(symObj));
      }).toThrow();
    });
  });
});
