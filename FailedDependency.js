'use strict';

// include dependencies
const prototype = require('./prototype');

const FailedDependency = function(opt = {}) {
  if (!new.target) {
    return new FailedDependency(opt);
  }

  // define private properties
  let message = 'Sorry, it appears a dependent request has failed please retry previous dependent request and try again.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'Sorry, it appears a dependent request has failed please retry previous dependent request and try again.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 424,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Failed Dependency',
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
      value: '@scuba-squad/faileddependency',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end FailedDependency  class definition

FailedDependency.prototype = Object.create(prototype, {
  constructor: {
    value: FailedDependency,
    enumerable: false,
    writable: false,
  },
  name: {
    value: 'FailedDependency',
    enumerable: false,
    writable: false,
  },
});

// export as commonjs module
module.exports = FailedDependency;