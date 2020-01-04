'use strict';

// include dependencies
const prototype = require('./prototype');

const UnprocessableEntity = function(opt = {}) {
  if (!new.target) {
    return new UnprocessableEntity(opt);
  }

  // define private properties
  let message = 'Sorry, it appears your document instructions are semantically erroneous.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'Sorry, it appears your document instructions are semantically erroneous.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 422,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Unprocessable Entity',
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
      value: '@scuba-squad/unprocessableentity',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end UnprocessableEntity class definition

UnprocessableEntity.prototype = Object.create(prototype, {
  constructor: {
    enumerable: false,
    value: UnprocessableEntity,
    writable: false,
  },
  name: {
    enumerable: false,
    value: 'UnprocessableEntity',
    writable: false,
  },
});

// export as commonjs module
module.exports = UnprocessableEntity;