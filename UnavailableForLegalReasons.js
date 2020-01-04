'use strict';

// include dependencies
const prototype = require('./prototype');

const UnavailableForLegalReasons = function(opt = {}) {
  if (!new.target) {
    return new UnavailableForLegalReasons(opt);
  }

  // define private properties
  let message = 'Due to legal reasons this resource has been removed.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'Due to legal reasons this resource has been removed.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 451,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Unavailable For Legal Reasons',
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
      value: '@scuba-squad/unavailableforlegalreasons',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end UnavailableForLegalReasons class definition

UnavailableForLegalReasons.prototype = Object.create(prototype, {
  constructor: {
    enumerable: false,
    value: UnavailableForLegalReasons,
    writable: false,
  },
  name: {
    enumerable: false,
    value: 'UnavailableForLegalReasons',
    writable: false,
  },
});

// export as commonjs module
module.exports = UnavailableForLegalReasons;