'use strict';

// include dependencies
const prototype = require('./prototype');

const TooManyRequests = function(opt = {}) {
  if (!new.target) {
    return new TooManyRequests(opt);
  }

  // define private properties
  let message = 'Sorry, you have exceeded your rate limit, please try again later.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'Sorry, you have exceeded your rate limit, please try again later.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 429,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Too Many Requests',
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
      value: '@scuba-squad/toomanyrequests',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end TooManyRequests  class definition

TooManyRequests.prototype = Object.create(prototype, {
  constructor: {
    value: TooManyRequests,
    enumerable: false,
    writable: false,
  },
  name: {
    value: 'TooManyRequests',
    enumerable: false,
    writable: false,
  },
});

// export as commonjs module
module.exports = TooManyRequests;