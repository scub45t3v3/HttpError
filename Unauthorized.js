'use strict';

// include dependencies
const prototype = require('./prototype');

const Unauthorized = function(opt = {}) {
  if (!new.target) {
    return new Unauthorized(opt);
  }

  // define private properties
  let message = 'Please, authenticate and try again.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'Please, authenticate and try again.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 401,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Unauthorized',
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
      value: '@scuba-squad/unauthorized',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end Unauthorized class definition

Unauthorized.prototype = Object.create(prototype, {
  constructor: {
    enumerable: false,
    value: Unauthorized,
    writable: false,
  },
  name: {
    enumerable: false,
    value: 'Unauthorized',
    writable: false,
  },
});

// export as commonjs module
module.exports = Unauthorized;