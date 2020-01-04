'use strict';

// include dependencies
const prototype = require('./prototype');

const NetworkAuthenticationRequired = function(opt = {}) {
  if (!new.target) {
    return new NetworkAuthenticationRequired(opt);
  }

  // define private properties
  let message = 'Please, authenticate with the network and try again.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'Please, authenticate with the network and try again.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 511,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Network Authentication Required',
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
      value: '@scuba-squad/networkauthenticationrequired',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end NetworkAuthenticationRequired class definition

NetworkAuthenticationRequired.prototype = Object.create(prototype, {
  constructor: {
    enumerable: false,
    value: NetworkAuthenticationRequired,
    writable: false,
  },
  name: {
    enumerable: false,
    value: 'NetworkAuthenticationRequired',
    writable: false,
  },
});

// export as commonjs module
module.exports = NetworkAuthenticationRequired;