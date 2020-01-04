'use strict';

// include dependencies
const prototype = require('./prototype');

const UnsupportedMediaType = function(opt = {}) {
  if (!new.target) {
    return new UnsupportedMediaType(opt);
  }

  // define private properties
  let message = 'Please, try again with a different media format.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'Please, try again with a different media format.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 415,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Unsupported Media Type',
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
      value: '@scuba-squad/unsupportedmediatype',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end UnsupportedMediaType class definition

UnsupportedMediaType.prototype = Object.create(prototype, {
  constructor: {
    enumerable: false,
    value: UnsupportedMediaType,
    writable: false,
  },
  name: {
    enumerable: false,
    value: 'UnsupportedMediaType',
    writable: false,
  },
});

// export as commonjs module
module.exports = UnsupportedMediaType;