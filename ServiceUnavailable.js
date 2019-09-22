'use strict';

// include dependencies
const prototype = require('./prototype');

const ServiceUnavailable = function(opt = {}) {
  if (!new.target) {
    return new ServiceUnavailable(opt);
  }

  // define private properties
  let message = 'Sorry, this service is currently unavailable, please try later.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'Sorry, this service is currently unavailable, please try later.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 503,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Service Unavailable',
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
      value: '@scuba-squad/serviceunavailable',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end ServiceUnavailable  class definition

ServiceUnavailable.prototype = Object.create(prototype, {
  constructor: {
    value: ServiceUnavailable,
    enumerable: false,
    writable: false,
  },
  name: {
    value: 'ServiceUnavailable',
    enumerable: false,
    writable: false,
  },
});

// export as commonjs module
module.exports = ServiceUnavailable;