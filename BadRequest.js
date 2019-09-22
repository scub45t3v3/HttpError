'use strict';

// include dependencies
const prototype = require('./prototype');

const BadRequest = function(opt = {}) {
  if (!new.target) {
    return new BadRequest(opt);
  }

  // define private properties
  let message = 'Please, correct your request and try again.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'Please, correct your request and try again.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 400,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Bad Request',
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
      value: '@scuba-squad/badrequest',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end BadRequest  class definition

BadRequest.prototype = Object.create(prototype, {
  constructor: {
    value: BadRequest,
    enumerable: false,
    writable: false,
  },
  name: {
    value: 'BadRequest',
    enumerable: false,
    writable: false,
  },
});

// export as commonjs module
module.exports = BadRequest;