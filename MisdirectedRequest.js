'use strict';

// include dependencies
const prototype = require('./prototype');

const MisdirectedRequest = function(opt = {}) {
  if (!new.target) {
    return new MisdirectedRequest(opt);
  }

  // define private properties
  let message = 'Sorry, we got misdirected, please try again later.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'Sorry, we got misdirected, please try again later.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 421,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Misdirected Request',
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
      value: '@scuba-squad/misdirectedrequest',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end MisdirectedRequest class definition

MisdirectedRequest.prototype = Object.create(prototype, {
  constructor: {
    enumerable: false,
    value: MisdirectedRequest,
    writable: false,
  },
  name: {
    enumerable: false,
    value: 'MisdirectedRequest',
    writable: false,
  },
});

// export as commonjs module
module.exports = MisdirectedRequest;