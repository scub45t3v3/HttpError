'use strict';

const unit = require('unit.js');
const client = require('../client');

// describe client
describe('client', () => {
  it('should expose default classes', () => {
    unit
      .object(client)
      .hasProperties([
        'BadRequest',
        'Unauthorized',
        'PaymentRequired',
        'Forbidden',
        'NotFound',
        'MethodNotAllowed',
        'NotAcceptable',
        'ProxyAuthenticationRequired',
        'RequestTimeout',
        'Conflict',
        'Gone',
        'LengthRequired',
        'PreconditionFailed',
        'PayloadTooLarge',
        'URITooLong',
        'UnsupportedMediaType',
        'RangeNotSatisfiable',
        'ExpectationFailed',
        'IMATeapot',
        'MisdirectedRequest',
        'UnprocessableEntity',
        'Locked',
        'FailedDependency',
        'UpgradeRequired',
        'PreconditionRequired',
        'TooManyRequests',
        'RequestHeaderFieldsTooLarge',
        'UnavailableForLegalReasons',
      ]);
  }); // end it
}); // end describe client