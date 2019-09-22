'use strict';

// include dependencies
const prototype = require('./prototype');

const Forbidden = function(opt = {}) {
  if (!new.target) {
    return new Forbidden(opt);
  }

  // define private properties
  let message = 'You lack permission to preform this action.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'You lack permission to preform this action.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 403,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Forbidden',
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
      value: '@scuba-squad/forbidden',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end Forbidden  class definition

Forbidden.prototype = Object.create(prototype, {
  constructor: {
    value: Forbidden,
    enumerable: false,
    writable: false,
  },
  name: {
    value: 'Forbidden',
    enumerable: false,
    writable: false,
  },
});

// export as commonjs module
module.exports = Forbidden;