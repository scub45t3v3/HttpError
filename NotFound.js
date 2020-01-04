'use strict';

// include dependencies
const prototype = require('./prototype');

const NotFound = function(opt = {}) {
  if (!new.target) {
    return new NotFound(opt);
  }

  // define private properties
  let message = 'The requested document was not found.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'The requested document was not found.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 404,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Not Found',
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
      value: '@scuba-squad/notfound',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end NotFound class definition

NotFound.prototype = Object.create(prototype, {
  constructor: {
    enumerable: false,
    value: NotFound,
    writable: false,
  },
  name: {
    enumerable: false,
    value: 'NotFound',
    writable: false,
  },
});

// export as commonjs module
module.exports = NotFound;