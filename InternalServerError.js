'use strict';

// include dependencies
const prototype = require('./prototype');

const InternalServerError = function(opt = {}) {
  if (!new.target) {
    return new InternalServerError(opt);
  }

  // define private properties
  let message = 'Sorry, it appears we had an unexpected error, please try again.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'Sorry, it appears we had an unexpected error, please try again.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 500,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Internal Server Error',
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
      value: '@scuba-squad/internalservererror',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end InternalServerError  class definition

InternalServerError.prototype = Object.create(prototype, {
  constructor: {
    value: InternalServerError,
    enumerable: false,
    writable: false,
  },
  name: {
    value: 'InternalServerError',
    enumerable: false,
    writable: false,
  },
});

// export as commonjs module
module.exports = InternalServerError;