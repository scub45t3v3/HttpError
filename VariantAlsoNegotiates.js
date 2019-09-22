'use strict';

// include dependencies
const prototype = require('./prototype');

const VariantAlsoNegotiates = function(opt = {}) {
  if (!new.target) {
    return new VariantAlsoNegotiates(opt);
  }

  // define private properties
  let message = 'Sorry, it appears there is a misconfiguration on our end.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'Sorry, it appears there is a misconfiguration on our end.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 506,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Variant Also Negotiates',
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
      value: '@scuba-squad/variantalsonegotiates',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end VariantAlsoNegotiates  class definition

VariantAlsoNegotiates.prototype = Object.create(prototype, {
  constructor: {
    value: VariantAlsoNegotiates,
    enumerable: false,
    writable: false,
  },
  name: {
    value: 'VariantAlsoNegotiates',
    enumerable: false,
    writable: false,
  },
});

// export as commonjs module
module.exports = VariantAlsoNegotiates;