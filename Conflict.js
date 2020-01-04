'use strict';

// include dependencies
const prototype = require('./prototype');

const Conflict = function(opt = {}) {
  if (!new.target) {
    return new Conflict(opt);
  }

  // define private properties
  let message = 'Houston, we have a conflict, please reload the resource and try again.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'Houston, we have a conflict, please reload the resource and try again.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 409,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Conflict',
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
      value: '@scuba-squad/conflict',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end Conflict class definition

Conflict.prototype = Object.create(prototype, {
  constructor: {
    enumerable: false,
    value: Conflict,
    writable: false,
  },
  name: {
    enumerable: false,
    value: 'Conflict',
    writable: false,
  },
});

// export as commonjs module
module.exports = Conflict;