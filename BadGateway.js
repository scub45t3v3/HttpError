'use strict';

// include dependencies
const prototype = require('./prototype');

const BadGateway = function(opt = {}) {
  if (!new.target) {
    return new BadGateway(opt);
  }

  // define private properties
  let message = 'Sorry, It appears we received an error from another service that is needed to fulfill your request, please try again later.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'Sorry, It appears we received an error from another service that is needed to fulfill your request, please try again later.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 502,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Bad Gateway',
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
      value: '@scuba-squad/badgateway',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end BadGateway class definition

BadGateway.prototype = Object.create(prototype, {
  constructor: {
    enumerable: false,
    value: BadGateway,
    writable: false,
  },
  name: {
    enumerable: false,
    value: 'BadGateway',
    writable: false,
  },
});

// export as commonjs module
module.exports = BadGateway;