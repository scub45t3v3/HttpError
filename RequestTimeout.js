'use strict';

// include dependencies
const prototype = require('./prototype');

const RequestTimeout = function(opt = {}) {
  if (!new.target) {
    return new RequestTimeout(opt);
  }

  // define private properties
  let message = 'Sorry, it appears we are on break, please try again later.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'Sorry, it appears we are on break, please try again later.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 408,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Request Timeout',
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
      value: '@scuba-squad/requesttimeout',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end RequestTimeout  class definition

RequestTimeout.prototype = Object.create(prototype, {
  constructor: {
    value: RequestTimeout,
    enumerable: false,
    writable: false,
  },
  name: {
    value: 'RequestTimeout',
    enumerable: false,
    writable: false,
  },
});

// export as commonjs module
module.exports = RequestTimeout;