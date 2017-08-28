'use strict';

var toNumber;
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
  toNumber = require('../../index.js');
} else {
  toNumber = returnExports;
}

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
  it('is a function', function () {
    expect(typeof toNumber).toBe('function');
  });

  it('coersion', function () {
    expect(Number.isNaN(toNumber(undefined))).toBe(true, 'undefined coerces to NaN');
    expect(toNumber(null)).toBe(0, 'null coerces to +0');
    expect(toNumber(false)).toBe(0, 'false coerces to +0');
    expect(toNumber(true)).toBe(1, 'true coerces to 1');
  });

  it('numbers', function () {
    expect(Number.isNaN(toNumber(NaN))).toBe(true, 'NaN returns itself');

    [
      0,
      -0,
      42,
      Infinity,
      -Infinity
    ].forEach(function (num) {
      expect(Object.is(toNumber(num), num)).toBe(true, num + ' returns itself');
    });

    [
      'foo',
      '0',
      '4a',
      '2.0',
      'Infinity',
      '-Infinity'
    ].forEach(function (numString) {
      expect(Object.is(toNumber(numString), Number(numString))).toBe(true, '"' + numString + '" coerces to ' + Number(numString));
    });
  });

  it('objects', function () {
    objects.forEach(function (object) {
      expect(Object.is(toNumber(object), Number(object))).toBe(true, 'object ' + object + ' coerces to same as ToPrimitive of object does');
    });

    expect(function () {
      toNumber(uncoercibleObject);
    }).toThrow();
  });

  it('binary literals', function () {
    expect(toNumber('0b10')).toBe(2, '0b10 is 2');
    expect(toNumber({
      toString: function () {
        return '0b11';
      }
    }), 3, 'Object that toStrings to 0b11 is 3');

    expect(Number.isNaN(toNumber('0b12'))).toBe(true, '0b12 is NaN');
    expect(Number.isNaN(toNumber({
      toString: function () {
        return '0b112';
      }
    }))).toBe(true, 'Object that toStrings to 0b112 is NaN');
  });

  it('octal literals', function () {
    expect(toNumber('0o10')).toBe(8, '0o10 is 8');
    expect(toNumber({
      toString: function () {
        return '0o11';
      }
    })).toBe(9, 'Object that toStrings to 0o11 is 9');

    expect(Number.isNaN(toNumber('0o18'))).toBe(true, '0o18 is NaN');
    expect(Number.isNaN(toNumber({
      toString: function () {
        return '0o118';
      }
    }))).toBe(true, 'Object that toStrings to 0o118 is NaN');
  });

  it('signed hex numbers', function () {
    expect(Number.isNaN(toNumber('-0xF'))).toBe(true, '-0xF is NaN');
    expect(Number.isNaN(toNumber(' -0xF '))).toBe(true, 'space-padded -0xF is NaN');
    expect(Number.isNaN(toNumber('+0xF'))).toBe(true, '+0xF is NaN');
    expect(Number.isNaN(toNumber(' +0xF '))).toBe(true, 'space-padded +0xF is NaN');
  });

  it('trimming of whitespace and non-whitespace characters', function () {
    var whitespace = ' \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000';
    expect(toNumber(whitespace + 0 + whitespace)).toBe(0, 'whitespace is trimmed');

    // Zero-width space (zws), next line character (nel), and non-character (bom) are not whitespace.
    var nonWhitespaces = {
      '\\u0085': '\u0085',
      '\\u200b': '\u200b',
      '\\ufffe': '\ufffe'
    };

    Object.keys(nonWhitespaces).forEach(function (desc) {
      var nonWS = nonWhitespaces[desc];
      expect(Number.isNaN(toNumber(nonWS + 0 + nonWS))).toBe(true, 'non-whitespace ' + desc + ' not trimmed');
    });
  });
});
