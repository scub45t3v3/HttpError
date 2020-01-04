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
  setMessage: {
    writable: false,
    value: setMessage,
  },
  getMessage: {
    writable: false,
    value: getMessage,
  },
  setDebug: {
    writable: false,
    value: setDebug,
  },
  getDebug: {
    writable: false,
    value: getDebug,
  },
  setCause: {
    writable: false,
    value: setCause,
  },
  getCause: {
    writable: false,
    value: getCause,
  },
  set: {
    writable: false,
    value: set,
  },
  get: {
    writable: false,
    value: get,
  },
  toJSON: {
    writable: false,
    value: toJSON,
  },
  toString: {
    writable: false,
    value: toString,
  },
});

// export as commonjs module
module.exports = prototype;