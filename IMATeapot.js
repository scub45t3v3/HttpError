'use strict';

// include dependencies
const prototype = require('./prototype');

const IMATeapot = function(opt = {}) {
  if (!new.target) {
    return new IMATeapot(opt);
  }

  // define private properties
  let message = 'Tip me over, and pour me out.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'Tip me over, and pour me out.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 418,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'I\'m a teapot',
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
      value: '@scuba-squad/imateapot',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end IMATeapot  class definition

IMATeapot.prototype = Object.create(prototype, {
  constructor: {
    value: IMATeapot,
    enumerable: false,
    writable: false,
  },
  name: {
    value: 'IMATeapot',
    enumerable: false,
    writable: false,
  },
});

// export as commonjs module
module.exports = IMATeapot;