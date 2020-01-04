'use strict';

// include dependencies
const prototype = require('./prototype');

const Gone = function(opt = {}) {
  if (!new.target) {
    return new Gone(opt);
  }

  // define private properties
  let message = 'Sorry, but that resource has been removed.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'Sorry, but that resource has been removed.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 410,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Gone',
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
      value: '@scuba-squad/gone',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end Gone class definition

Gone.prototype = Object.create(prototype, {
  constructor: {
    enumerable: false,
    value: Gone,
    writable: false,
  },
  name: {
    enumerable: false,
    value: 'Gone',
    writable: false,
  },
});

// export as commonjs module
module.exports = Gone;