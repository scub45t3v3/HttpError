'use strict';

// include dependencies
const prototype = require('./prototype');

const LoopDetected = function(opt = {}) {
  if (!new.target) {
    return new LoopDetected(opt);
  }

  // define private properties
  let message = 'Sorry, We have detected an infintie loop and had to stop the request, please try again later.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'Sorry, We have detected an infintie loop and had to stop the request, please try again later.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 508,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Loop Detected',
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
      value: '@scuba-squad/loopdetected',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end LoopDetected class definition

LoopDetected.prototype = Object.create(prototype, {
  constructor: {
    enumerable: false,
    value: LoopDetected,
    writable: false,
  },
  name: {
    enumerable: false,
    value: 'LoopDetected',
    writable: false,
  },
});

// export as commonjs module
module.exports = LoopDetected;