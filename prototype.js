'use strict';

// include dependecies
const _ = require('underscore');
const {version} = require('./package');

const setMessage = function(value) {
  this.message = value;

  return this;
};

const getMessage = function() {
  return this.message;
};

const setDebug = function(value) {
  this.debug = value;

  return this;
};

const getDebug = function() {
  return this.debug;
};

const setCause = function(value) {
  this.cause = value;

  return this;
};

const getCause = function() {
  return this.cause;
};

const get = function(...args) {
  args = _.flatten(`${args}`.split(/\s*,\s*/u));

  return _.pick(this, ...args);
}; // end get

const set = function(opt = {}) {
  _.each(opt, (value, key) => {
    this[key] = value;
  });

  return this;
}; // end set

const toJSON = function() {
  return this.get(_.allKeys(this));
}; // end toJSON

const toString = function() {
  return [
    `${this.constructor.name}:`,
    this.code,
    this.status,
  ]
    .join(' ')
    .trim()
    .replace(/\s+/u, ' ')
    .replace(/:$/u, '');
}; // end toString

const prototype = Object.create(Error.prototype, {
  VERSION: {
    enumerable: false,
    value: version,
    writable: false,
  },
  getMessage: {
    value: getMessage,
    writable: false,
  },
  setMessage: {
    value: setMessage,
    writable: false,
  },
  getDebug: {
    value: getDebug,
    writable: false,
  },
  setDebug: {
    value: setDebug,
    writable: false,
  },
  getCause: {
    value: getCause,
    writable: false,
  },
  setCause: {
    value: setCause,
    writable: false,
  },
  get: {
    value: get,
    writable: false,
  },
  set: {
    value: set,
    writable: false,
  },
  toJSON: {
    value: toJSON,
    writable: false,
  },
  toString: {
    value: toString,
    writable: false,
  },
});

// export as commonjs module
module.exports = prototype;