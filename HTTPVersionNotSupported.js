'use strict';

// include dependencies
const prototype = require('./prototype');

const HTTPVersionNotSupported = function(opt = {}) {
  if (!new.target) {
    return new HTTPVersionNotSupported(opt);
  }

  // define private properties
  let message = 'Please, try a diffrent protocol version and try again.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'Please, try a diffrent protocol version and try again.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 505,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'HTTP Version Not Supported',
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
      value: '@scuba-squad/httpversionnotsupported',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end HTTPVersionNotSupported class definition

HTTPVersionNotSupported.prototype = Object.create(prototype, {
  constructor: {
    enumerable: false,
    value: HTTPVersionNotSupported,
    writable: false,
  },
  name: {
    enumerable: false,
    value: 'HTTPVersionNotSupported',
    writable: false,
  },
});

// export as commonjs module
module.exports = HTTPVersionNotSupported;