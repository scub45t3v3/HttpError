'use strict';

// include dependencies
const prototype = require('./prototype');

const PaymentRequired = function(opt = {}) {
  if (!new.target) {
    return new PaymentRequired(opt);
  }

  // define private properties
  let message = 'Payment is required to use this service.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'Payment is required to use this service.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 402,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Payment Required',
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
      value: '@scuba-squad/paymentrequired',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end PaymentRequired class definition

PaymentRequired.prototype = Object.create(prototype, {
  constructor: {
    enumerable: false,
    value: PaymentRequired,
    writable: false,
  },
  name: {
    enumerable: false,
    value: 'PaymentRequired',
    writable: false,
  },
});

// export as commonjs module
module.exports = PaymentRequired;