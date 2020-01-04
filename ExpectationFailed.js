'use strict';

// include dependencies
const prototype = require('./prototype');

const ExpectationFailed = function(opt = {}) {
  if (!new.target) {
    return new ExpectationFailed(opt);
  }

  // define private properties
  let message = 'Sorry, your expectation can not be meet, please check Expect and try again.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'Sorry, your expectation can not be meet, please check Expect and try again.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 417,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Expectation Failed',
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
      value: '@scuba-squad/expectationfailed',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end ExpectationFailed class definition

ExpectationFailed.prototype = Object.create(prototype, {
  constructor: {
    enumerable: false,
    value: ExpectationFailed,
    writable: false,
  },
  name: {
    enumerable: false,
    value: 'ExpectationFailed',
    writable: false,
  },
});

// export as commonjs module
module.exports = ExpectationFailed;