'use strict';

const fs = require('fs');
const toPascalCase = require('@scuba-squad/transformation/toPascalCase');
const errors = require('../config');
const template = require('./template');

errors.forEach(({code, status, message}) => {
  const file = `${toPascalCase(status)}.js`;
  fs.writeFileSync(file, template.class(code, status, message));
  fs.writeFileSync(`test/${file}`, template.test(code, status, message));
});
