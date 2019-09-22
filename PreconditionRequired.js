'use strict';

// include dependencies
const prototype = require('./prototype');

const PreconditionRequired = function(opt = {}) {
  if (!new.target) {
    return new PreconditionRequired(opt);
  }

  // define private properties
  let message = 'Please, add preconditions to your request and try again.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'Please, add preconditions to your request and try again.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 428,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Precondition Required',
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
      value: '@scuba-squad/preconditionrequired',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end PreconditionRequired  class definition

PreconditionRequired.prototype = Object.create(prototype, {
  constructor: {
    value: PreconditionRequired,
    enumerable: false,
    writable: false,
  },
  name: {
    value: 'PreconditionRequired',
    enumerable: false,
    writable: false,
  },
});

// export as commonjs module
module.exports = PreconditionRequired;