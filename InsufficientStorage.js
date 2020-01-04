'use strict';

// include dependencies
const prototype = require('./prototype');

const InsufficientStorage = function(opt = {}) {
  if (!new.target) {
    return new InsufficientStorage(opt);
  }

  // define private properties
  let message = 'Sorry, it appears we have no more room for storage.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'Sorry, it appears we have no more room for storage.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 507,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Insufficient Storage',
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
      value: '@scuba-squad/insufficientstorage',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end InsufficientStorage class definition

InsufficientStorage.prototype = Object.create(prototype, {
  constructor: {
    enumerable: false,
    value: InsufficientStorage,
    writable: false,
  },
  name: {
    enumerable: false,
    value: 'InsufficientStorage',
    writable: false,
  },
});

// export as commonjs module
module.exports = InsufficientStorage;