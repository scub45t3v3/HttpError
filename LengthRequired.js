'use strict';

// include dependencies
const prototype = require('./prototype');

const LengthRequired = function(opt = {}) {
  if (!new.target) {
    return new LengthRequired(opt);
  }

  // define private properties
  let message = 'Please, correct the Length header and try again.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'Please, correct the Length header and try again.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 411,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Length Required',
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
      value: '@scuba-squad/lengthrequired',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end LengthRequired class definition

LengthRequired.prototype = Object.create(prototype, {
  constructor: {
    enumerable: false,
    value: LengthRequired,
    writable: false,
  },
  name: {
    enumerable: false,
    value: 'LengthRequired',
    writable: false,
  },
});

// export as commonjs module
module.exports = LengthRequired;