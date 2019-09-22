'use strict';

// include dependencies
const prototype = require('./prototype');

const UpgradeRequired = function(opt = {}) {
  if (!new.target) {
    return new UpgradeRequired(opt);
  }

  // define private properties
  let message = 'Please, upgrade and try again.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'Please, upgrade and try again.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 426,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Upgrade Required',
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
      value: '@scuba-squad/upgraderequired',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end UpgradeRequired  class definition

UpgradeRequired.prototype = Object.create(prototype, {
  constructor: {
    value: UpgradeRequired,
    enumerable: false,
    writable: false,
  },
  name: {
    value: 'UpgradeRequired',
    enumerable: false,
    writable: false,
  },
});

// export as commonjs module
module.exports = UpgradeRequired;