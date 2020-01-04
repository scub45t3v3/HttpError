'use strict';

// include dependencies
const prototype = require('./prototype');

const MethodNotAllowed = function(opt = {}) {
  if (!new.target) {
    return new MethodNotAllowed(opt);
  }

  // define private properties
  let message = 'Please, check your request method and try again.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'Please, check your request method and try again.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 405,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Method Not Allowed',
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
      value: '@scuba-squad/methodnotallowed',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end MethodNotAllowed class definition

MethodNotAllowed.prototype = Object.create(prototype, {
  constructor: {
    enumerable: false,
    value: MethodNotAllowed,
    writable: false,
  },
  name: {
    enumerable: false,
    value: 'MethodNotAllowed',
    writable: false,
  },
});

// export as commonjs module
module.exports = MethodNotAllowed;