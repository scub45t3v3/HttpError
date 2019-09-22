'use strict';

// include dependencies
const prototype = require('./prototype');

const NotImplemented = function(opt = {}) {
  if (!new.target) {
    return new NotImplemented(opt);
  }

  // define private properties
  let message = 'Sorry, this is not fully implemented, please try later.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'Sorry, this is not fully implemented, please try later.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 501,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Not Implemented',
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
      value: '@scuba-squad/notimplemented',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end NotImplemented  class definition

NotImplemented.prototype = Object.create(prototype, {
  constructor: {
    value: NotImplemented,
    enumerable: false,
    writable: false,
  },
  name: {
    value: 'NotImplemented',
    enumerable: false,
    writable: false,
  },
});

// export as commonjs module
module.exports = NotImplemented;