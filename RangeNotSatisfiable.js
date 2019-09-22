'use strict';

// include dependencies
const prototype = require('./prototype');

const RangeNotSatisfiable = function(opt = {}) {
  if (!new.target) {
    return new RangeNotSatisfiable(opt);
  }

  // define private properties
  let message = 'Requested range is not satisfiable, please check Range and try again.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'Requested range is not satisfiable, please check Range and try again.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 416,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Range Not Satisfiable',
      writable: false,
    },
    message: {
      enumerable: true,
      get: getMessage,
      set: setMessage,
    },
    debug: {
      enumerable: true,
      writable: true,
    },
    cause: {
      enumerable: true,
      writable: true,
    },
    [Symbol.toStringTag]: {
      writable: false,
      value: '@scuba-squad/rangenotsatisfiable',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end RangeNotSatisfiable  class definition

RangeNotSatisfiable.prototype = Object.create(prototype, {
  constructor: {
    value: RangeNotSatisfiable,
    enumerable: false,
    writable: false,
  },
  name: {
    value: 'RangeNotSatisfiable',
    enumerable: false,
    writable: false,
  },
});

// export as commonjs module
module.exports = RangeNotSatisfiable;