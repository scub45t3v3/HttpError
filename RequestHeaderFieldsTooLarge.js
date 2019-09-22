'use strict';

// include dependencies
const prototype = require('./prototype');

const RequestHeaderFieldsTooLarge = function(opt = {}) {
  if (!new.target) {
    return new RequestHeaderFieldsTooLarge(opt);
  }

  // define private properties
  let message = 'Request header is too large and can not be processed.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'Request header is too large and can not be processed.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 431,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Request Header Fields Too Large',
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
      value: '@scuba-squad/requestheaderfieldstoolarge',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end RequestHeaderFieldsTooLarge  class definition

RequestHeaderFieldsTooLarge.prototype = Object.create(prototype, {
  constructor: {
    value: RequestHeaderFieldsTooLarge,
    enumerable: false,
    writable: false,
  },
  name: {
    value: 'RequestHeaderFieldsTooLarge',
    enumerable: false,
    writable: false,
  },
});

// export as commonjs module
module.exports = RequestHeaderFieldsTooLarge;