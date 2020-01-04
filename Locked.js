'use strict';

// include dependencies
const prototype = require('./prototype');

const Locked = function(opt = {}) {
  if (!new.target) {
    return new Locked(opt);
  }

  // define private properties
  let message = 'Document is currently locked, please try again later.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'Document is currently locked, please try again later.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 423,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Locked',
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
      value: '@scuba-squad/locked',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end Locked class definition

Locked.prototype = Object.create(prototype, {
  constructor: {
    enumerable: false,
    value: Locked,
    writable: false,
  },
  name: {
    enumerable: false,
    value: 'Locked',
    writable: false,
  },
});

// export as commonjs module
module.exports = Locked;