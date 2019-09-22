'use strict';

// include dependencies
const prototype = require('./prototype');

const ProxyAuthenticationRequired = function(opt = {}) {
  if (!new.target) {
    return new ProxyAuthenticationRequired(opt);
  }

  // define private properties
  let message = 'Please, authenticate with the proxy server and try again.';

  const getMessage = () => {
    return message;
  }; // end getMessage

  const setMessage = (value) => {
    message = (value && `${value}`.trim()) || 'Please, authenticate with the proxy server and try again.';

    return this;
  }; // end setMessage

  Object.defineProperties(this, {
    code: {
      enumerable: true,
      value: 407,
      writable: false,
    },
    status: {
      enumerable: true,
      value: 'Proxy Authentication Required',
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
      value: '@scuba-squad/proxyauthenticationrequired',
    },
  });

  Object.seal(this);

  return this.set(opt);
}; // end ProxyAuthenticationRequired  class definition

ProxyAuthenticationRequired.prototype = Object.create(prototype, {
  constructor: {
    value: ProxyAuthenticationRequired,
    enumerable: false,
    writable: false,
  },
  name: {
    value: 'ProxyAuthenticationRequired',
    enumerable: false,
    writable: false,
  },
});

// export as commonjs module
module.exports = ProxyAuthenticationRequired;