'use strict';

// include dependencies
const prototype = require('./prototype');

const NotExtended = function(opt = {}) {
  if (!new.target) {
    return new NotExtended(opt);
  }

  // define private properties
  let message = 'The policy for accessing this resource has not been met by this request.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'The policy for accessing this resource has not been met by this request.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 510,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Not Extended',
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
      value: '@scuba-squad/notextended',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end NotExtended  class definition

NotExtended.prototype = Object.create(prototype, {
  constructor: {
    value: NotExtended,
    enumerable: false,
    writable: false,
  },
  name: {
    value: 'NotExtended',
    enumerable: false,
    writable: false,
  },
});

// export as commonjs module
module.exports = NotExtended;