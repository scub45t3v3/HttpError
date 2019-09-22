'use strict';

// include dependencies
const prototype = require('./prototype');

const PayloadTooLarge = function(opt = {}) {
  if (!new.target) {
    return new PayloadTooLarge(opt);
  }

  // define private properties
  let message = 'Request payload is too large and can not be processed.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'Request payload is too large and can not be processed.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 413,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Payload Too Large',
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
      value: '@scuba-squad/payloadtoolarge',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end PayloadTooLarge  class definition

PayloadTooLarge.prototype = Object.create(prototype, {
  constructor: {
    value: PayloadTooLarge,
    enumerable: false,
    writable: false,
  },
  name: {
    value: 'PayloadTooLarge',
    enumerable: false,
    writable: false,
  },
});

// export as commonjs module
module.exports = PayloadTooLarge;