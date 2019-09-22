'use strict';

// include dependencies
const prototype = require('./prototype');

const UnknownError = function(opt = {}) {
  if (!new.target) {
    return new UnknownError(opt);
  }

  // define private properties
  let message = 'Sorry, an unexpected error has occured, please try again later.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'Sorry, an unexpected error has occured, please try again later.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 520,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Unknown Error',
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
      value: '@scuba-squad/unknownerror',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end UnknownError  class definition

UnknownError.prototype = Object.create(prototype, {
  constructor: {
    value: UnknownError,
    enumerable: false,
    writable: false,
  },
  name: {
    value: 'UnknownError',
    enumerable: false,
    writable: false,
  },
});

// export as commonjs module
module.exports = UnknownError;