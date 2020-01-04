'use strict';

// include dependencies
const prototype = require('./prototype');

const NotAcceptable = function(opt = {}) {
  if (!new.target) {
    return new NotAcceptable(opt);
  }

  // define private properties
  let message = 'The requested document format is not supported.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'The requested document format is not supported.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 406,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Not Acceptable',
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
      value: '@scuba-squad/notacceptable',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end NotAcceptable class definition

NotAcceptable.prototype = Object.create(prototype, {
  constructor: {
    enumerable: false,
    value: NotAcceptable,
    writable: false,
  },
  name: {
    enumerable: false,
    value: 'NotAcceptable',
    writable: false,
  },
});

// export as commonjs module
module.exports = NotAcceptable;