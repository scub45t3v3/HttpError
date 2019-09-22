'use strict';

const toPascalCase = require('@scuba-squad/transformation/toPascalCase');
const errors = require('./server');
const codes = require('./config').reduce((memo, {code, status}) => {
  memo[code] = status;

  return memo;
}, {});

const ServerError = function(name) {
  name = codes[name] || name;
  name = toPascalCase(name);

  return errors[name]();
}; // end ServerError

Object.defineProperty(ServerError, Symbol.hasInstance, {
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
module.exports = ServerError;