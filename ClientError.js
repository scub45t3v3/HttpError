'use strict';

const toPascalCase = require('@scuba-squad/transformation/toPascalCase');
const errors = require('./client');
const codes = require('./config').reduce((memo, {code, status}) => {
  memo[code] = status;

  return memo;
}, {});

const ClientError = function(name) {
  name = codes[name] || name;
  name = toPascalCase(name);

  return errors[name]();
}; // end ClientError

Object.defineProperty(ClientError, Symbol.hasInstance, {
  writable: false,
  value(instance) {
    return Object
      .values(errors)
      .some((error) => {
        return instance instanceof error;
      });
  },
});

// export as commonjs module
module.exports = ClientError;