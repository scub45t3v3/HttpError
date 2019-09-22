'use strict';

// include dependencies
const prototype = require('./prototype');

const URITooLong = function(opt = {}) {
  if (!new.target) {
    return new URITooLong(opt);
  }

  // define private properties
  let message = 'Request uri is too large and can not be processed.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'Request uri is too large and can not be processed.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 414,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'URI Too Long',
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
      value: '@scuba-squad/uritoolong',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end URITooLong  class definition

URITooLong.prototype = Object.create(prototype, {
  constructor: {
    value: URITooLong,
    enumerable: false,
    writable: false,
  },
  name: {
    value: 'URITooLong',
    enumerable: false,
    writable: false,
  },
});

// export as commonjs module
module.exports = URITooLong;