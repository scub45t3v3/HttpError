'use strict';

// include dependencies
const prototype = require('./prototype');

const GatewayTimeout = function(opt = {}) {
  if (!new.target) {
    return new GatewayTimeout(opt);
  }

  // define private properties
  let message = 'Sorry, it appears another service is taking to long and we cannot wait any longer.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'Sorry, it appears another service is taking to long and we cannot wait any longer.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 504,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Gateway Timeout',
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
      value: '@scuba-squad/gatewaytimeout',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end GatewayTimeout class definition

GatewayTimeout.prototype = Object.create(prototype, {
  constructor: {
    enumerable: false,
    value: GatewayTimeout,
    writable: false,
  },
  name: {
    enumerable: false,
    value: 'GatewayTimeout',
    writable: false,
  },
});

// export as commonjs module
module.exports = GatewayTimeout;