'use strict';

// include dependencies
const prototype = require('./prototype');

const PreconditionFailed = function(opt = {}) {
  if (!new.target) {
    return new PreconditionFailed(opt);
  }

  // define private properties
  let message = 'Sorry, it appears 1 or more preconditions on the request have changed, please correct and try again.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'Sorry, it appears 1 or more preconditions on the request have changed, please correct and try again.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 412,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Precondition Failed',
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
      value: '@scuba-squad/preconditionfailed',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end PreconditionFailed class definition

PreconditionFailed.prototype = Object.create(prototype, {
  constructor: {
    enumerable: false,
    value: PreconditionFailed,
    writable: false,
  },
  name: {
    enumerable: false,
    value: 'PreconditionFailed',
    writable: false,
  },
});

// export as commonjs module
module.exports = PreconditionFailed;