'use strict';

const toPascalCase = require('@scuba-squad/transformation/toPascalCase');
const codes = require('./config').reduce((memo, {code, status}) => {
  memo[code] = status;

  return memo;
}, {});
const errors = {
  ...require('./client'),
  ...require('./server'),
};

const HttpError = function(name) {
  name = codes[name] || name;
  name = toPascalCase(name);

  return errors[name]();
}; // end HttpError

Object.defineProperty(HttpError, Symbol.hasInstance, {
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
module.exports = HttpError;